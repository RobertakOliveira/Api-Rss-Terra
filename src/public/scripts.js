document.getElementById('consultarBtn').addEventListener('click', async () => {
    const resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = '<p>Carregando...</p>';

    const baseURL = 'http://localhost:3000/api';

    try {
        // Faz a requisição para o endpoint do backend
        const uploadResponse = await fetch(baseURL +'/upload', { method: 'POST',});
        if (!uploadResponse.ok) {
            throw new Error(`Erro na requisição: ${uploadResponse.statusText}`);
        };

            const uploadData = await uploadResponse.json();
            console.log('Resposta do upload:', uploadData.message);

        // Faz a requisição para o endpoint do backend
        const response = await fetch(baseURL +'/download');
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        };
        
          // Converte a resposta para texto e depois para JSON
            const text = await response.text();
            const data = JSON.parse(text);

        // Cria a lista de itens
        const list = document.createElement('ul');
        data.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h3>${item.title}</h3>
                <p><strong>Criador:</strong> ${item.creator}</p>
                <p><strong>Data de Publicação:</strong> ${new Date(item.pubDate).toLocaleString()}</p>
                <p>${item.contentSnippet}</p>
                <a href="${item.link}" target="_blank">Leia mais</a>
            `;
            list.appendChild(listItem);
        });

        // Exibe a lista na página
        resultDiv.innerHTML = '';
        resultDiv.appendChild(list);
    } catch (error) {
        console.error('Erro completo:', error);
        resultDiv.innerHTML = `<p>Erro: ${error.message}</p>`;
    }
});