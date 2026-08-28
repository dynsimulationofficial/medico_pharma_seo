import fs from "fs";

const text = fs.readFileSync("scratch_tablets.html", "utf-8");

const match = text.match(/window\.__COMPANY_DATA__\s*=\s*({.*?});/s);
if (match) {
  const data = JSON.parse(match[1]);
  console.log("Catdata length:", data.catdata ? data.catdata.length : 0);
  if (data.catdata) {
    let totalP = 0;
    for (const c of data.catdata) {
      console.log(`Category: "${c.mcat_name}" (${c.pdata ? c.pdata.length : 0} items)`);
      if (c.pdata) {
        totalP += c.pdata.length;
        c.pdata.forEach((p, idx) => {
          console.log(`  ${idx + 1}. [ID: ${p.p_id || p.display_id}] ${p.p_name || p.name} | Img: ${p.img_url || p.image || 'None'}`);
        });
      }
    }
    console.log("Total products in this page:", totalP);
  }
}
