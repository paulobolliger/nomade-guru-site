
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { mensagem } = req.body;

    if (!mensagem || mensagem.trim().length < 10) {
      return res.status(400).json({ message: 'Descreva melhor sua ideia de viagem.' });
    }

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Você é um especialista em roteiros de viagem personalizados. Crie apenas um parágrafo de sugestão com base no pedido do cliente.' },
        { role: 'user', content: mensagem }
      ],
      temperature: 0.8
    });

    const resposta = completion.data.choices[0].message.content.trim();
    return res.status(200).json({ roteiro: resposta });

  } catch (error) {
    console.error('Erro OpenAI:', error?.response?.data || error.message);
    return res.status(500).json({ message: 'Erro ao gerar roteiro com IA.' });
  }
};
