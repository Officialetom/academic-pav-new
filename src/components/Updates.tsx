import image1 from "../assets/news-1.jpg";
import image2 from "../assets/news-2.jpg";
import image3 from "../assets/news-3.jpg";
import { Link } from "react-router-dom";

function Updates() {
  return (
    <div className="updates">
      <div className="updates-container">
        <div className="update-item">
          <h2>News and Updates</h2>
          <span>Recent</span>
        </div>
        <div className="update-item">
          {/* update item */}
          <div className="update">
            <div className="update_img">
              <img src={image1} alt="news_image" />
            </div>
            <div className="update_info">
              <div className="update_title">
                <span>Olivia Rhye - 4 Jun 2025</span>
                <h4>
                  <Link to="/">UX Review presentations</Link>
                </h4>
              </div>
              <div className="update_desc">
                <span>
                  How do you create compelling presentations that wow your
                  colleagues and impress your manager?
                </span>
              </div>
              <div className="update_tags">
                <span className="tag">Design</span>
                <span className="tag">Research</span>
                <span className="tag">Presentation</span>
              </div>
            </div>
          </div>
          {/* update item */}
          <div className="update">
            <div className="update_img">
              <img src={image2} alt="news_image" />
            </div>
            <div className="update_info">
              <div className="update_title">
                <span>Olivia Rhye - 4 Jun 2025</span>
                <h4>
                  <Link to="/">UX Review presentations</Link>
                </h4>
              </div>
              <div className="update_desc">
                <span>
                  How do you create compelling presentations that wow your
                  colleagues and impress your manager?
                </span>
              </div>
              <div className="update_tags">
                <span className="tag">Design</span>
                <span className="tag">Research</span>
                <span className="tag">Presentation</span>
              </div>
            </div>
          </div>
          {/* update item */}
          <div className="update">
            <div className="update_img">
              <img src={image3} alt="news_image" />
            </div>
            <div className="update_info">
              <div className="update_title">
                <span>Olivia Rhye - 4 Jun 2025</span>
                <h4>
                  <Link to="/">UX Review presentations</Link>
                </h4>
              </div>
              <div className="update_desc">
                <span>
                  How do you create compelling presentations that wow your
                  colleagues and impress your manager?
                </span>
              </div>
              <div className="update_tags">
                <span className="tag">Design</span>
                <span className="tag">Research</span>
                <span className="tag">Presentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updates;
