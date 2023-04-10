import React from "react";
import backgroundImage from "../../src/Img/blogImages/blogPost1.png";
import article from "../../src/Img/blogImages/blogPost7.png";
import article1 from "../../src/Img/blogImages/blogPost8.png";
import Footer from "../Component/Footer";

const CardOne = () => {
  return (
    <>
      <div className="cardOne container">
        <h1 className="text-center mt-3">Benefit of ferment food</h1>
        <img
          className="cardImg text-center"
          style={{
            width: "100%",
            height: "30rem",
            // width: "70%",
            // margin: "auto",
            padding: "2rem",
            // padding: "2rem",
            // display: "flex",
            // justifyContent: "center",
          }}
          src={backgroundImage}
          alt=""
        />

        <p>
          The method of lacto-fermentation is used to produce fermented foods.
          Lactic acid is produced naturally by bacteria as they consume the
          food's sugar and starch. The food is preserved during this procedure,
          which also yields advantageous vitamins, minerals, and enzymes.
          Moreover, it produces a variety of probiotic strains as well as
          physiologically active peptides. Even vitamin K2, which is crucial for
          strong bones, is produced by lactic acid bacteria. Foods that have
          undergone fermentation are easier to digest and retain more of their
          nutritional value. For instance, our digestive system can more easily
          absorb gluten thanks to the fermentation process in sourdough bread.
          Wheat's FODMAP levels are even reduced by it. Those who have IBS and
          other FODMAP difficulties, such as bloating after meals, will find it
          simpler to digest as a result.
        </p>

        <p>
          Fermented vegetables, dairy products, and other foods have been
          consumed for ages in cultures all over the world. from kimchi in Korea
          to sauerkraut in Germany, and everything in between. For many years,
          these foods have played a significant role in promoting human health.
        </p>

        {/* <P>
        Below are a few foods that have undergone fermentation. I've also
        provided several recipes that you can prepare on your own or use in
        other meals:
      </P> */}
        <div></div>

        <h5>Sauerkraut</h5>
        <p>
          Since ancient times, Germans have fermented cabbage to store it during
          the winter. It's useful for food storage and beneficial for your
          health. Learning how to make sauerkraut at home is simple.
        </p>
        <h5>Kimchi</h5>
        <p>
          This side dish from Korea is more than just fermented cabbage. Family
          recipes from the past incorporate different vegetables to spice things
          up. For instance, seaweed, cucumber, celery, bamboo shoots, and spring
          onions. Seasonings used in kimchi vary as well. Common choices include
          tangy seasonings and sauces including fish sauce, garlic, ginger, and
          Korean chili powder.
        </p>
        <h5>Miso</h5>
        <p>
          A fermented soybean paste is called miso. initially prepared it with
          salt and koji (a fungus, Aspergillus oryzae). Others include extras
          like sesame seeds, seaweed, and grains (like rice or barley). Miso is
          used by chefs as a seasoning and in soups and sauces.
        </p>
        <h5>Tempeh</h5>
        <p>
          The origin of this fermented soybean cake is Indonesia. They use
          either Rhizopus oligosporus or Rhizopus oryzae to ferment the
          soybeans. Several people cook it after brining or seasoning it.
          Thereafter, tempeh is consumed either on its own or as a component of
          soups, stir-fries, or sandwiches. It does a great job of soaking up
          the flavors of the food you cook it in.
        </p>
        <h3>Foods Often Fermented</h3>
        <p>
          Fermented vegetables, dairy products, and other foods have been
          consumed for ages in cultures all over the world. from kimchi in Korea
          to sauerkraut in Germany, and everything in between. For many years,
          these foods have played a significant role in promoting human health.
          <br />
          Below are a few foods that have undergone fermentation. I've also
          provided several recipes that you can prepare on your own or use in
          other meals:
        </p>
        <h3>Benefits of Fermented Foods for Health</h3>
        <p>
          Why consume these things? These are first and foremost delicious (I
          guarantee you'll get used to the taste!). There are numerous more
          benefits of producing and consuming fermented foods, including:
        </p>
        <p>
          Probiotics: Fermented foods and beverages give the digestive system a
          boost by introducing good microorganisms. Also, they support a healthy
          balance of gut flora. Even some diseases have been demonstrated to be
          slowed down or even reversed by probiotics. Moreover, they can improve
          immunity and aid in digestion.
        </p>
        <p>
          Improved Food Absorption - You can absorb more nutrients from meals if
          your gut flora are in harmony and you have enough digestive enzymes.
          The nutrients in food are more readily available to the body after
          fermentation. For instance, fermented oat gruel enhances the
          absorption of iron. Because you'll be absorbing more of the live
          nutrients in your foods, you might not need as many supplements. All
          thanks to the helpful bacteria. Enhance gut health Improved digestive
          health can result from consuming lactic acid bacteria from fermented
          foods. Basically, fermentation makes the nutritious components in food
          active (for example, flavonoids). They then aid the body by enhancing
          immunological, metabolic, and cardiovascular health
        </p>
        <p>
          Boost Weight Loss - Eating fermented food may also aid in the fight
          against obesity. Over time, consuming fermented foods on a daily basis
          causes weight loss. Weight loss or weight gain may depend on the
          species balance in the gut microbiome. These foods should be taken
          into account in the battle against obesity as a result.
        </p>
        <p>
          Improved Mental Health - Consuming foods that have undergone
          fermentation may help you feel better mentally. Serotonin and other
          feel-good neurotransmitters are produced by microorganisms that are
          fed by it. SSRIs, or commonly prescribed antidepressants, aid
          serotonin recycling. The treatment of the stomach should play a
          significant role in mental wellness.
        </p>
        <p>
          Reduce Inflammation - Increasing your intake of fermented foods can
          help reduce inflammation. The growth of beneficial bacteria in the
          gastrointestinal tract encourages the synthesis of postbiotics that
          are anti-inflammatory.
        </p>
        <p>
          Enhance immunity – By increasing the diversity of species in the
          microbiome, fermented foods also help balance the immune system.
        </p>
      </div>
      <section className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card">
              <img src={article} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Benefits of running</h5>
                <p class="card-text">
                  Running is a popular form of exercise for a reason. You can do
                  it pretty much anywhere and whenever it's handy for you
                  because it doesn't require a lot of equipment. Experts also
                  claim that it enhances cardiac health. One of the greatest
                  cardio exercises you can do is running. Your risk of
                  cardiovascular diseases can be greatly reduced by running for
                  at least 10 minutes each day. Running significantly cuts the
                  risk of dying from cardiac disease in half. Additionally, it
                  reduces
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={article1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Healthy eating</h5>
                <p class="card-text">
                  Eating a healthy diet is not about strict limitations, staying
                  unrealistically thin, or depriving yourself of the foods you
                  love. Rather, it’s about feeling great, having more energy,
                  improving your health, and boosting your mood. Healthy eating
                  doesn’t have to be overly complicated. If you feel overwhelmed
                  by all the conflicting nutrition and diet advice out there,
                  you’re not alone. It seems that for every expert who tells you
                  a certain food is good for you, you’ll
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Exercise and arthritis</h5>
                <p class="card-text">
                  An umbrella term for more than 150 distinct illnesses,
                  arthritis. The correct word for this set of ailments is
                  "musculoskeletal illnesses," as they have an impact on the
                  bones, muscles, and joints. Knowing a little something about
                  the muscles, bones, and joints that make up your
                  musculoskeletal system will help you better grasp how
                  arthritis and other musculoskeletal disorders function. A
                  joint is a structure that allows movement at the meeting point
                  of two bones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
  <Footer />
};

export default CardOne;
