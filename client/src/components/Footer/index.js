import React from "react";
import "./style.css";

function Footer() {
  return (

  <section id="footer">
		<div className="container">
    <div className="col-xs-12 col-sm-6 col-md-8 col-lg-12  ">
					<h6>Developers:</h6>
					<ul className="list-unstyled quick-links">
						<li><a href="https://github.com/Saigonomai"><i className="fa fa-angle-double-right"></i>Kevin Tang</a></li>
						<li><a href="https://github.com/sarahsakhri"><i className="fa fa-angle-double-right"></i>Sarah Sakhri</a></li>
						<li><a href="https://github.com/Tiffolin"><i className="fa fa-angle-double-right"></i>Tiffany Lin</a></li>
						<li><a href="https://github.com/KaiAnnFletcher"><i className="fa fa-angle-double-right"></i>Kai-Ann Fletcher</a></li>
						<li><a href="https://github.com/david-fetchopia"><i className="fa fa-angle-double-right"></i>David Ma</a></li>
            <span className="text-center copyrightStyle">© 2019 Copyright <u><a href="https://github.com/KaiAnnFletcher/Project-3_Team-2">  [Github Repo]</a></u></span>
					</ul>
				</div>


		</div>
</section>

  );
}

export default Footer;