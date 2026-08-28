import fs from "fs";
import path from "path";

const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Cache-Control": "max-age=0",
  "Sec-Ch-Ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": '"Windows"',
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1"
};

async function testFetch() {
  const url = "https://www.indiamart.com/medicospharma/pharmaceutical-tablets.html";
  console.log("Fetching with browser headers:", url);
  const res = await fetch(url, { headers });
  console.log("Status:", res.status);
  if (res.ok) {
    const text = await res.text();
    console.log("Response length:", text.length);
    
    // Save to scratch file to inspect
    fs.writeFileSync("./scratch_tablets.html", text);
    console.log("Saved scratch_tablets.html");
  }
}

testFetch();
