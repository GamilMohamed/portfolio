import "./square.css";

const colors = ["red", "blue", "green", "magenta", "purple", "orange"];

function randomColor() {
	  return colors[Math.floor(Math.random() * colors.length)];
}

function Square() {
  return (
    <>
	<section id="square">
      <div>square</div>
      <div className="grid">
        {[...Array(10 * 5)].map((_, i) => (
			<div key={i} className="grid-item" style={{backgroundColor: randomColor()}}>{i}</div>
			))}
      </div>
	  <section id="colors">
		<div className="choose">
			{colors.map((color) => (
				<div key={color} style={{backgroundColor: color}}></div>
				))}
		</div>
	  </section>
	</section>
    </>
  );
}

export default Square;
