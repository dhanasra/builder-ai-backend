const pdf = require('pdf-parse');
const responser = require("../core/responser");
const { default: axios } = require('axios');

async function parsePdf(req, res){
    const pdfUrl = req.body?.url;
    try{
        const pdfContent = await fetchPDFContent(pdfUrl);
        const extractedData = await extractDataFromPDF(pdfContent);
        return responser.success(res, extractedData, "AUTH_S001");
    }catch(error){
        console.log(error);
        return responser.error(res, error, "AUTH_E001");
    }
}

async function extractDataFromPDF(pdfContent) {
    try {
      const data = await pdf(pdfContent);
      return data.text;
    } catch (error) {
      console.error('Error extracting data from PDF:', error);
      throw error;
    }
  }
  

async function fetchPDFContent(url) {
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      return response.data;
    } catch (error) {
      console.error('Error fetching PDF:', error);
      throw error;
    }
  }


module.exports = {
    parsePdf
}