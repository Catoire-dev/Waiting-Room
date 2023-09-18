export const rdvFormatList = (data) => {
  const rdvList = Object.values(data).flat();
  const formatedRdvList = [];
  rdvList.forEach((el) => {
    const [firstName, lastName] = el.name.trim().split(" ");
    const secu = el.noSS.replace(/\s/g, "").slice(0, 5);
    const cle = el.noSS.replace(/\s/g, "").slice(-2);
    const code = el.reference.slice(2, 3);

    formatedRdvList.push(`${secu};${lastName};${firstName};${cle};${code}`);
  });
  return formatedRdvList;
};
