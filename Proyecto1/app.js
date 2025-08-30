
// Shared helpers to load SQLite (sql.js) and query the bundled database
let dbInstance = null;

async function initDB(){
  if(dbInstance) return dbInstance;
  // Load sql.js from CDN
  if(!window.initSqlJs){
    await new Promise((res, rej)=>{
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/sql-wasm.js';
      s.onload = res; s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  const SQL = await initSqlJs({
    locateFile: file => 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/' + file
  });
  const buf = await fetch('./db/sample.db').then(r=>r.arrayBuffer());
  dbInstance = new SQL.Database(new Uint8Array(buf));
  return dbInstance;
}

function q(db, sql, params=[]){
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while(stmt.step()){
    rows.push(stmt.getAsObject());
  }
  stmt.free();
  return rows;
}

function $(sel){ return document.querySelector(sel); }
function el(html){
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
