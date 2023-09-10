const respond = (name, age) => {
  let response = '';

  if (age >= 20) {
    response = `Hi ${name}! You are older than me.`;
  } else {
    response = `Hi ${name}! You are younger than me.`;
  }
  
  return response;
}

export { respond };