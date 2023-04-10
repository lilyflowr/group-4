import React from "react";
import fermented from "../Img/blogImages/blogPost1.png";
import family from "../Img/blogImages/blogPost2.png";
import fruits from "../Img/blogImages/blogPost3.png";
import fish from "../Img/blogImages/blogPost4.png";
import yoga from "../Img/blogImages/blogPost5.png";
import strawberry from "../Img/blogImages/blogPost6.png";
import hiking from "../Img/blogImages/blogPost7.png";
import fruithearts from "../Img/blogImages/blogPost8.png";
import elderly from "../Img/blogImages/blogPost9.png";
import CardOne from "../Card/cardOne.js";
import { Link } from "react-router-dom";
import CardTwo from "../Card/cardTwo.js";

const blogCards = () =>{
  return (
   <>
      <div className="container p-5">
        <div class="row row-cols-1 row-cols-md-3 g-5">
          <div class="col">
            <div class="card h-100">
              <img src={fermented} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>Benefits of fermented food</strong>
                </h5>
                <h6 class="card-author">
                  <small>By Jenny Famous . March 2, 2023</small>
                </h6>
                <p class="card-text">The method of lacto-fermentation is used to produce fermented foods. Lactic acid is produced naturally by microbes as they consume the food's sugar and starch. 
                The food is preserved during this procedure, which also yields advantageous vitamins, minerals, and enzymes.</p>
                <h4 class="card-readMore">
                <a href="SignUp"><strong>Read More </strong> </a>
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card  h-100">
              <img src={family} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>Everyday wellness</strong>
                </h5>
                <h6 class="card-author">
                  <small>By George Green . March 16, 2023</small>
                </h6>
                <p class="card-text">Any action, no matter how minor, that promotes health and vitality can be considered to be part of wellness. Wellness includes eating healthily and exercising, 
                but it also includes things like going on a stroll with a friend, practicing a balance exercise, and doing everyday tasks in novel ways.</p>
                <h4 class="card-readMore">
                <Link  to="/cardTwo" ><strong>Read More </strong> </Link>
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src={fruits} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>The Anti-Inflammatory Diet: What Is It?</strong>
                </h5>
                <h6 class="card-author">
                  <small>The Anti-Inflammatory Diet: What Is It?</small>
                </h6>
                <p class="card-text">Understanding what inflammation is in the first place is helpful in understanding why an anti-inflammatory diet might be beneficial and is now one of the most talked-about diets.
                 Perhaps the first thing that springs to mind when you hear the ...</p>
                <h4 class="card-readMore">
                  <a href=""><small>Read More</small></a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div class="row row-cols-1 row-cols-md-3 g-5">
          <div class="col">
            <div class="card h-100">
              <img src={fish} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>What You Should Know About Omega-3s</strong>
                </h5>
                <h6 class="card-author">
                  <small>By Milly Thompson . February 2, 2023</small>
                </h6>
                <p class="card-text">Although the trendy phrase
                 "fatty acids" may not sound particularly delicious, including these vital nutrients in your diet supports both large-scale (heart and brain health) and small-scale biological activities (the membranes around your cells).</p>
                <h4 class="card-readMore">
                  <a href=""><small>Read More</small></a>
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card  h-100">
              <img src={yoga} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>Recipes for your immune system</strong>
                </h5>
                <h6 class="card-author">
                  <small>By Anel William . March 2, 2023</small>
                </h6>
                <p class="card-text">The method of lacto-fermentation is used to produce fermented foods. Lactic acid is produced naturally by microbes as they consume the food's sugar and starch. 
                The food is preserved during this procedure, which also yields advantageous vitamins, minerals, and..</p>
                <h4 class="card-readMore">
                  <a href=""><small>Read More</small></a>
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src={strawberry} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>7 Possible Strawberry Health Benefits</strong>
                </h5>
                <h6 class="card-author">
                  <small>By Sarah Peter . March 2, 2023</small>
                </h6>
                <p class="card-text">Strawberries are the sixth most popular fruit in the United States, with the average person eating a little over 5 pounds (lb) of the bright red berry per year, according to the U.S. Department of Agriculture
                 (USDA). It’s easy to see why — the sweet, juicy fruits are just..</p>
                <h4 class="card-readMore">
                  <a href=""><small>Read More</small></a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container p-5">
        <div class="row row-cols-1 row-cols-md-3 g-5">
          <div class="col">
            <div class="card h-100">
              <img src={hiking} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>Benefits of running</strong>
                </h5>
                <h6 class="card-author">
                  <small>By Jack Sparrow . March 5, 2023</small>
                </h6>
                <p class="card-text">Running is a popular form of exercise for a reason. You can do it pretty much anywhere and whenever it's handy for you because it doesn't require a lot of equipment. 
                Experts also claim that it enhances cardiac health. One of the greatest cardio exercises you can do is running. </p>
                <h4 class="card-readMore">
                  <a href=""><small>Read More</small></a>
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card  h-100">
              <img src={fruithearts} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>Healthy eating</strong>
                </h5>
                <h6 class="card-author">
                  <small>By James Authur . January 25, 2023</small>
                </h6>
                <p class="card-text">Eating a healthy diet is not about strict limitations, 
                staying unrealistically thin, or depriving yourself of the foods you love. Rather, it’s about feeling great, having more energy, improving your health, and boosting your mood.
Healthy eating doesn’t have to be overly complicated. </p>
                <h4 class="card-readMore">
                  <a href=""><small>Read More</small></a>
                </h4>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src={elderly} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">
                  <strong>Exercise and arthritis</strong>
                </h5>
                <h6 class="card-author">
                  <small>By Ben Marcus . March 5, 2023</small>
                </h6>
                <p class="card-text">An umbrella term for more than 150 distinct illnesses, arthritis. 
                The correct word for this set of ailments is "musculoskeletal illnesses," as they have an impact on the bones,
                 muscles, and joints. Knowing a little something about the muscles, bones, and joints that make up ...</p>
                <h4 class="card-readMore">
                  <a href=""><small>Read More</small></a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
);
};
export default blogCards;