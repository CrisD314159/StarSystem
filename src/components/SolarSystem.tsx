import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import planetsList from '../planets.json';

interface Props {
  position: number;
  width:number,
  height:number
}

interface PlanetInterface {
  name: string,
  
  distance: number, 
  color: string, 

}
const SolarSystem = (props:Props) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = props.width;
    const height = props.height;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const planetsFilter: PlanetInterface[] = [];
    planetsList.planets.forEach((planet) => {
      if (planet.position < props.position) {
        planetsFilter.push({ name: '', distance: planet.distance, color: planet.color });
      }else if (planet.position === props.position){
        planetsFilter.push({ name: planet.name, distance: planet.distance, color: planet.color });
      }
    });
    const planets = planetsFilter;

   
    const maxDistance = d3.max(planets, d => d.distance) || 1;
    const xScale = d3.scaleLinear().domain([0, maxDistance]).range([0, width / 2 - 50]);
    //const yScale = d3.scaleLinear().domain([0, maxDistance]).range([0, height / 2 - 50]);
    const distanceScale = d3.scaleLinear()
    .domain([0, d3.max(planets, d => d.distance) || 1])
    .range([0, width / 2 - 50]);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Dibujar órbitas como elipses
 
    g.selectAll('circle.orbit')
    .data(planets)
    .enter()
    .append('circle')
    .attr('class', 'orbit')
    .attr('r', d => distanceScale(d.distance))
    .attr('stroke', '#ccc')
    .attr('fill', 'none');

    /*
       g.selectAll('ellipse.orbit')
      .data(planets)
      .enter()
      .append('ellipse')
      .attr('class', 'orbit')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('rx', d => xScale(d.distance))
      .attr('ry', d => yScale(d.distance) * 0.6) // Hacerlas elípticas
      .attr('stroke', '#ccc')
      .attr('fill', 'none');

    */
    // Dibujar planetas
    g.selectAll('circle.planet')
      .data(planets)
      .enter()
      .append('circle')
      .attr('class', 'planet')
      .attr('r', 5)
      .attr('fill', d => d.color)
      .attr('box-shadow', `rgb(255, 255, 255) 1px 0 10px;`)
      .attr('cx', d => xScale(d.distance))
      .attr('cy', 0);

    // Etiquetas de planetas
    g.selectAll('text')
      .data(planets)
      .enter()
      .append('text')
      .attr('x', d => xScale(d.distance))
      .attr('y', -10)
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .text(d => d.name);

  }, [props]);
  return (
    <svg ref={svgRef}></svg>
  );
};

export default SolarSystem;

