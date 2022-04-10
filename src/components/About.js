import drop from '../assets/Water_Drop_Small.png';
import stats from '../assets/Stats_small.png';
import cart from '../assets/shopping_cart_small.png';

const About = () => {
  return (
    <>
      <div className="topicSection">
        <div className="mainHeader">
          What's <div className="rectangle">Rehydrate</div>?
        </div>
        <div className="infoContainer">
          <div className="subHeader">Purpose</div>
          <div className="subText">
            Most and more areas and its communities are being affected by
            drought and heatwaves.
          </div>
        </div>
        <div className="infoContainer">
          <div className="subHeader">Why are we losing water?</div>
          <div className="subText">
            People might not know this, but it takes gallons of water to produce
            items and run operations.
          </div>
        </div>
        <div className="infoContainer">
          <div className="subHeader">Initiative</div>
          <div className="subText">
            Corporations are running high water usage without plans to deal with
            drought and heatwaves. With education, there are many actions to
            take.
          </div>
        </div>
      </div>
      <div className="topicSection">
        <div className="mainHeader">
          Why
          <div className="rectangle" id="corp">
            Corporations
          </div>
          ?
        </div>
        <div className="infoContainer">
          <div className="subHeader">Accountability</div>
          <div className="subText">
            Corporations are running high water usage without plans to deal with
            drought and heatwaves, but they have little to no plans on dealing
            with the issues and the communities.
          </div>
        </div>
        <div className="infoContainer">
          <div className="subHeader">Advocate</div>
          <div className="subText">
            Share your research from their water usage and protest to the
            corporate or company to implement better environmental policies and
            practices.
          </div>
        </div>
        <div className="infoContainer">
          <div className="subHeader">Alternatives</div>
          <div className="subText">
            Support alternative and small businesses that practice water
            conservation (such as recycling water, etc) and work on charitable
            actions related to drought and heatwaves. Supporting local
            businesses improves your community too!
          </div>
        </div>
      </div>
      <div className="topicSection" id="why">
        <div className="mainHeader">
          Why <div className="rectangle">Rehydrate</div>?
        </div>
        <div className="imgSection">
          <img className="smallImg" alt="water drop" src={drop} />
          <div className="textSection">
            <div className="subHeader">Save Water</div>
            <div className="subText">
              Educate and keep corporations accountable for water conservation
              through initiatives to prevent drought and heatwaves, as well as
              provide resources in crises.
            </div>
          </div>
        </div>
        <div className="imgSection">
          <img className="smallImg" alt="stats" src={stats} />
          <div className="textSection">
            <div className="subHeader">See Stats</div>
            <div className="subText">
              Corporations publish annual reports which include water usage of
              their headquarters and suppliers.
            </div>
          </div>
        </div>
        <div className="imgSection">
          <img className="smallImg" alt="shopping cart" src={cart} />
          <div className="textSection">
            <div className="subHeader">Shop Blue</div>
            <div className="subText">
              Support stores that are conserving water and creating community
              initiatives dealing with drought and heatwaves.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
