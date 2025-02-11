import { fromIni } from '@aws-sdk/credential-provider-ini';
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { exec } from "child_process";

dotenv.config();

const __filename = fileURLToPath(import.meta.url); // Obtém o caminho do arquivo atual
const __dirname = path.dirname(__filename); // Obtém o diretório atual
const parseScriptPath = path.join(__dirname, "../../parse/parseRSS.js"); // Caminho do script de parse
const jsonFilePath = path.join(__dirname, "../../parse/feed.json");   // Caminho do JSON gerado

const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: fromIni({ profile: 'carlos-vital' }), 
});

class RSSController {

    static async createFileJson() {
        return new Promise((resolve, reject) => {
            console.log("Executando script de parse...");
            exec(`node ${parseScriptPath}`, (error, stdout, stderr) => {
                if (error) {
                    return reject(new Error(`Execução falhou: ${error.message}`));
                }
                resolve();
            });            
        });
    }

    static async uploadFileToS3(req, res) {

        await RSSController.createFileJson();
        const bucketName = "teste-02";
        const key = "feed";

        if (!fs.existsSync(jsonFilePath)) {
            return res.status(500).json({ error: "O arquivo feed.json não foi gerado." });
        }

        try {
            const fileContent = fs.readFileSync(jsonFilePath);

            const params = {
                Bucket: bucketName,
                Key: key,
                Body: fileContent,
                ContentType: 'application/json',
            };

            const command = new PutObjectCommand(params);
            await s3Client.send(command);

            res.send(`Arquivo ${key} enviado com sucesso para o bucket ${bucketName}.`);
        } catch (error) {
            res.status(500).send(`{ error: ${error.message} }`);
        }
    }

    static async downloadFileFromS3(req, res) {
        const bucketName = "teste-02";
        const key = "feed";

        try {
            const params = {
                Bucket: bucketName,
                Key: key,
            };

            const data = await s3Client.send(new GetObjectCommand(params));
            // Converte o stream de dados em uma string
            const chunks = [];
            for await (const chunk of data.Body) {
                chunks.push(chunk);
            }
            const fileContent = Buffer.concat(chunks).toString('utf-8');

            res.send(fileContent);
        } catch (error) {
            res.status(500).send(`{ error: ${error.message} }`);
        }
    }
}


export default RSSController;
