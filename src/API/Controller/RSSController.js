import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); //Diretório atual
const otherDirectory = path.join(__dirname, '..', '..', '/parse'); //Diretório aonde fica o arquivo feed.json


// Configurações do S3
const s3Client = new S3Client({
    region: "us-east-1", 
    credentials: {
        accessKeyId: "",
        secretAccessKey: "", 
    },
});

//Função para fazer o upload para o S3
const uploadFileToS3 = async (bucketName, filePath, key) => {
    try {
        const fileContent = fs.readFileSync(filePath);

        
        const params = {
            Bucket: bucketName, 
            Key: key, 
            Body: fileContent,
            ContentType: "application/json",
        };

        //Comando para dar o put no S3
        const command = new PutObjectCommand(params);
        await s3Client.send(command);

        console.log(`Arquivo ${key} enviado com sucesso para o bucket ${bucketName}.`);
    } catch (error) {
        console.error("Erro ao fazer upload do arquivo:", error);
    }
};

const bucketName = "grupo-02"; 
const filePath = path.join(otherDirectory, "feed.json");
console.log(filePath)
const key = "feed";

uploadFileToS3(bucketName, filePath, key);