import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <>
      {/* <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br /> */}
      <Navbar bg="dak" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="data:image/jpeg;base64,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"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '} */}
           <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg" class="__web-inspector-hide-shortcut__"><path d="M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z"></path></svg>
            <span className='multicolortext'> Portfolio</span>
          </Navbar.Brand>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">About</a>
                <a class="nav-link" href="#">Technologies</a>
                <a class="nav-link" href ="#">Projects</a>
              </div>
          </div>
          <div className="media">
                <a target="_blank" href="https://github.com/VKwamboka" className="social">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2rem" width="3rem" xmlns="http://www.w3.org/2000/svg">
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z">
                        </path>
                    </svg>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/verah-k-57b111213/" className="social">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2rem" width="3rem" xmlns="http://www.w3.org/2000/svg">
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z">
                        </path>
                    </svg>
                </a>
                <a target="_blank" href="https://twitter.com/Kwambo_kah" className="social">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2rem" width="3rem" xmlns="http://www.w3.org/2000/svg">
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z">
                        </path>
                    </svg>
                </a>
            </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;