import { fromIni } from '@aws-sdk/credential-provider-ini';
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url); // Obtém o caminho do arquivo atual
const __dirname = path.dirname(__filename); // Obtém o diretório atual
const otherDirectory = path.join(__dirname, '..', '..', 'parse'); // Diretório onde está o feed.json

const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1', 
    credentials: fromIni({ profile: 'carlos-vital' }), 
});

class RSSController {

    static async uploadFileToS3(req, res) {
        const bucketName = "teste-02";
        const filePath = path.join(otherDirectory, "feed.json");
        console.log(filePath);
        const key = "feed";

        try {
            const fileContent = fs.readFileSync(filePath);

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
