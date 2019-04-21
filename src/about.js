class About {

  generateAbout() {
    
  }

  render() {

    return(

      <div id="about" class="">
        <a href="mailto:mrkxvncnt@gmail.com"><i class="far fa-envelope"></i></a>
        <a href="https://github.com/mrkvncnt"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/mark-vincent-rodriguez-a39934163/"><i class="fab fa-linkedin"></i></a>
      </div>

    );

  }

}

document.getElementById('nav-about').innerHTML = `${About}`;