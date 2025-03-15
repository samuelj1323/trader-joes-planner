const myHeaders = new Headers();
myHeaders.append("accept", "*/*");
myHeaders.append("accept-language", "en-US,en;q=0.9");
myHeaders.append("content-type", "application/json");
myHeaders.append(
  "cookie",
  '_ga_2KLNSNQXP1=GS1.2.1736793360.1.1.1736793381.0.0.0; _ga_PVSN19270R=GS1.1.1736793359.1.1.1736793389.30.0.0; AMCVS_B5B4708F5F4CE8D80A495ED9%40AdobeOrg=1; AMCV_B5B4708F5F4CE8D80A495ED9%40AdobeOrg=-2121179033%7CMCIDTS%7C20109%7CMCMID%7C36269165842501858252991265986221563216%7CMCAAMLH-1737993926%7C7%7CMCAAMB-1737993926%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1737396326s%7CNONE%7CvVersion%7C5.3.0; gpv_c51=https%3A%2F%2Fwww.traderjoes.com%2Fhome; s_vncm=1738385999200%26vn%3D4; s_ivc=true; s_lv_s=Less%20than%207%20days; s_visit=1; s_ips=732; s_dur=1737389126157; s_inv=157868; s_cc=true; _ga_2HMPBJHQ41=GS1.1.1737389126.6.0.1737389126.0.0.0; __kla_id=eyJjaWQiOiJOamhtTWpBd09URXRaamMxWVMwMFpHUTRMVGt6TUdNdFl6TmtOVGxtT1RFMU5EWTQiLCIkcmVmZXJyZXIiOnsidHMiOjE3MzY3OTMzOTAsInZhbHVlIjoiaHR0cHM6Ly9sb2NhdGlvbnMudHJhZGVyam9lcy5jb20vIiwiZmlyc3RfcGFnZSI6Imh0dHBzOi8vd3d3LnRyYWRlcmpvZXMuY29tL2hvbWUifSwiJGxhc3RfcmVmZXJyZXIiOnsidHMiOjE3MzczODkxMjcsInZhbHVlIjoiIiwiZmlyc3RfcGFnZSI6Imh0dHBzOi8vd3d3LnRyYWRlcmpvZXMuY29tL2hvbWUifX0=; _ga=GA1.2.978716061.1736793359; _gid=GA1.2.1097230777.1737389127; _gat_UA-15671700-1=1; s_plt=1.49; s_pltp=www.traderjoes.com%7Chome; s_ptc=0.13%5E%5E0.00%5E%5E0.03%5E%5E0.08%5E%5E0.14%5E%5E0.00%5E%5E1.09%5E%5E0.00%5E%5E1.49; affinity="80954fa7bc96c359"; s_tps=16; s_pvs=17; s_nr30=1737389141698-Repeat; s_lv=1737389141699; s_tslv=1737389141701; s_sq=traderjoesprod%3D%2526c.%2526a.%2526activitymap.%2526page%253Dwww.traderjoes.com%25257Chome%2526link%253DFood%2526region%253Dheader%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dwww.traderjoes.com%25257Chome%2526pidt%253D1%2526oid%253Dhttps%25253A%25252F%25252Fwww.traderjoes.com%25252Fhome%25252Fproducts%25252Fcategory%25252Ffood-8%2526ot%253DA; s_tp=992; s_ppv=www.traderjoes.com%257Chome%2C100%2C74%2C992%2C1%2C1; _dd_s=logs=1&id=29567470-3774-4b04-adc5-955aa16a3220&created=1737389125874&expire=1737390041687'
);
myHeaders.append("dnt", "1");
myHeaders.append("origin", "https://www.traderjoes.com");
myHeaders.append("priority", "u=1, i");
myHeaders.append(
  "referer",
  "https://www.traderjoes.com/home/products/category/food-8"
);
myHeaders.append(
  "sec-ch-ua",
  '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"'
);
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", '"macOS"');
myHeaders.append("sec-fetch-dest", "empty");
myHeaders.append("sec-fetch-mode", "cors");
myHeaders.append("sec-fetch-site", "same-origin");
myHeaders.append(
  "user-agent",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
);

const graphql = JSON.stringify({
  query:
    'query SearchProducts($categoryId: String, $currentPage: Int, $pageSize: Int, $storeCode: String = "545", $availability: String = "1", $published: String = "1") {\n  products(\n    filter: {store_code: {eq: $storeCode}, published: {eq: $published}, availability: {match: $availability}, category_id: {eq: $categoryId}}\n    currentPage: $currentPage\n    pageSize: $pageSize\n  ) {\n    items {\n      sku\n      item_title\n      category_hierarchy {\n        id\n        name\n        __typename\n      }\n      primary_image\n      primary_image_meta {\n        url\n        metadata\n        __typename\n      }\n      sales_size\n      sales_uom_description\n      price_range {\n        minimum_price {\n          final_price {\n            currency\n            value\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      retail_price\n      fun_tags\n      item_characteristics\n      __typename\n    }\n    total_count\n    pageInfo: page_info {\n      currentPage: current_page\n      totalPages: total_pages\n      __typename\n    }\n    aggregations {\n      attribute_code\n      label\n      count\n      options {\n        label\n        value\n        count\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n',
  variables: {
    storeCode: "545",
    availability: "1",
    published: "1",
    categoryId: 8,
    currentPage: 1,
    pageSize: 100,
  },
});
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: graphql,
  redirect: "follow",
};

fetch("https://www.traderjoes.com/api/graphql", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
