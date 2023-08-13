'use client'

import { select } from 'd3';
import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
  
  const [data, setData] = useState([24, 30, 45, 70, 26]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current); // selection 객체

    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "red");
  }, [data]);

  return (
    <>
      <div className="w-full bg-slate-100 flex flex-col border-red-700 border">
        <svg className="w-full h-96" ref={svgRef}></svg>
        <div className="flex justify-center bg-gray-700">
          <button className="w-full border px-1 py-1 text-white" onClick={() => {setData(data.map(el => el + 5))}}>increase + 5</button>
          <button className="w-full border px-1 py-1 text-white" onClick={() => {setData(data.filter(el => el > 35))}}>filter circle r should gt 35</button>
        </div>
      </div>
    </>
  );
}
