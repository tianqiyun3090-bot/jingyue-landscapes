"use client";

import { useState } from "react";

const places = [
  { name: "阿尔卑斯湖", region: "奥地利 · 暮光", feeling: "雪山倒映进夜色" },
  { name: "峡湾晨雾", region: "挪威 · 清晨", feeling: "云从水面缓缓醒来" },
  { name: "高原草甸", region: "中国 · 夏末", feeling: "风穿过一整片金绿" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const place = places[active];

  return (
    <main className="scene-shell">
      <div className={`scene-image scene-${active}`} aria-hidden="true" />
      <div className="scene-vignette" aria-hidden="true" />
      <nav className="topbar" aria-label="主导航">
        <a className="brand" href="#top" aria-label="境阅首页"><span className="brand-mark" aria-hidden="true">⌁</span><span>境阅</span></a>
        <p className="nav-note">慢一点，看见远方</p>
        <button className="sound-button" type="button" aria-label="环境音未开启"><span aria-hidden="true">◌</span> 静音</button>
      </nav>
      <section className="stage" id="top" aria-labelledby="place-name">
        <p className="eyebrow">此刻正在观赏</p>
        <h1 id="place-name">{place.name}</h1>
        <p className="place-meta">{place.region}</p>
        <p className="place-description">{place.feeling}</p>
      </section>
      <aside className="compass" aria-label="画面方位"><span className="north">N</span><span className="compass-line" /><span>46° 31′</span></aside>
      <section className="journey" aria-labelledby="journey-title">
        <div className="journey-heading"><p className="eyebrow" id="journey-title">继续远行</p><span>{String(active + 1).padStart(2, "0")} / 03</span></div>
        <div className="place-list" role="tablist" aria-label="选择风景">
          {places.map((item, index) => (
            <button className={`place-card ${active === index ? "is-active" : ""}`} key={item.name} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
              <span className="card-index">0{index + 1}</span><span className="card-copy"><strong>{item.name}</strong><small>{item.region}</small></span><span className="card-arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      </section>
      <footer><span>© 2026 境阅</span><span>为那些愿意抬头的人</span></footer>
    </main>
  );
}
