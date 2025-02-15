FROM node:18

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Atualizar pacotes e instala AWS CLI
RUN apt-get update && apt-get install -y \
    curl \
    unzip \
    && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install \
    && rm -rf awscliv2.zip ./aws \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Criar diretório para credenciais da AWS
RUN mkdir -p /root/.aws

# Definir variáveis de ambiente para o AWS SSO
ENV AWS_PROFILE=default

# Comando padrão ao iniciar o container
CMD ["node", "src/server.js"]