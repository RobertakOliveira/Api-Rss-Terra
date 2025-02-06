const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
    region: process.env.AWS_REGION, // 'us-east-1'
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,  // Obtém a chave de acesso da variável de ambiente
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,  // Obtém a chave secreta da variável de ambiente
    }
  });

const __dirname = path.dirname(__filename); //Diretório atual
const otherDirectory = path.join(__dirname, '..', '..', '/parse'); //Diretório aonde fica o arquivo feed.json

class RSSController {

    static async uploadFileToS3(req, res) {
        const bucketName = "grupo-02";
        const filePath = path.join(otherDirectory, "feed.json");
        console.log(filePath);
        const key = "feed";

        try {
            const fileContent = fs.readFileSync(filePath);

            const params = {
                Bucket: bucketName,
                Key: key,
                Body: fileContent,
                ContentType: "application/json",
            };

            const command = new PutObjectCommand(params);
            await s3Client.send(command);

            res.send(`Arquivo ${key} enviado com sucesso para o bucket ${bucketName}.`);
        } catch (error) {
            res.status(500).send("Erro ao fazer upload do arquivo.");
        }
    }
    
}

module.exports = RSSController;