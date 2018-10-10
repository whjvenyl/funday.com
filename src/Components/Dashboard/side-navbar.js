import React from 'react';
import './side_navbar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  render() {
    $(document).ready(function() {
      $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
      });
    });
    return (
      <div className="funday-nav">
        <div className="wrapper">
          <nav id="sidebar">
            <ul className="list-unstyled components">
              <li className="active">
                <Link to="/dashboard">Inbox</Link>
              </li>

              <li>
                <Link to="/dashboard/calendar">Calendar</Link>
              </li>

              <li>
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i
                    className="fa fa-bars"
                    style={{
                      marginRight: '10px',
                      fontSize: '14px',
                      position: 'relative',
                      bottom: '2px'
                    }}
                  />
                  Boards
                </a>
              </li>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Link to="/dashboard/boards">Boards1</Link>
                </li>
                <li>
                  <Link to="/dashboard/boards">Boards2</Link>
                </li>
                <li>
                  <Link to="/dashboard/boards">Boards3</Link>
                </li>
              </ul>
              <li>
                <Link to="/dashboard/teams">Team</Link>
              </li>
            </ul>
          </nav>

          <div id="content">
            <button type="button" id="sidebarCollapse" className="navbar-btn">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="modal fade" id="boardModal" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <i className="fa fa-bars envelope-icon mr-2" />
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add New Board
                </h5>
                <button className="close" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="modal-input-box"
                  placeholder="New Board Name"
                  style={{ padding: '5px' }}
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary invite-buttn"
                  data-dismiss="modal"
                >
                  Create Board
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default navbar;
