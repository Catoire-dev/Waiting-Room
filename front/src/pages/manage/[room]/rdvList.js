export const rdvFormatList = (data) => {
  const rdvList = data;
  if (!rdvList) {
    return [];
  }
  const formatedRdvList = [];
  rdvList.forEach((el) => {
    formatedRdvList.push(rdvFormatOne(el));
  });
  return formatedRdvList;
};

export const rdvFormatOne = (data) => {
  const [firstName, lastName] = data.name.trim().split(" ");
  const secu = data.noSS.replace(/\s/g, "").slice(0, 5);
  const cle = data.noSS.replace(/\s/g, "").slice(-2);
  const code = data.reference.slice(2, 3);

  const formatedRdv = `${secu};${lastName};${firstName};${cle};${code}`;

  return formatedRdv;
}