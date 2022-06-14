const billingRepo = require('./repository/billingRepo');


exports.handler = async (event) => {

  console.log('Parametros de ingreso'+ JSON.stringify(event) )
  // TODO implement

  const res = await billingRepo.makeRequest()
  const response = {
      statusCode: 200,
      body: 'continous integration Action succesfully',
  };
  return response;
};

