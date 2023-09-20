export const FormatRdvList = (data) => {
  const rdvList = data;
  if (!rdvList) {
    return [];
  }
  const formatedRdvList = [];
  rdvList.forEach((el) => {
    formatedRdvList.push(FormatRdvOne(el));
  });
  return formatedRdvList;
};

export const FormatRdvOne = (data) => {
  const [firstName, lastName] = data.name.trim().split(" ");
  const secu = data.noSS.replace(/\s/g, "").slice(0, 5);
  const cle = data.noSS.replace(/\s/g, "").slice(-2);
  const code = data.reference.slice(2, 3);

  const formatedRdv = `${secu};${lastName};${firstName};${cle};${code}`;

  return formatedRdv;
}