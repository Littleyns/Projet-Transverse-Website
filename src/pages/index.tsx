import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <img src="https://nsa40.casimages.com/img/2021/05/06/mini_21050607171781187.png" width="80px" height="80px" id="imgg"></img>
        <Header inverted as="h1">Just Heal Integration</Header>
        <Header inverted as="h2">L'établissement des fondations !</Header>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe" >
            <div className="main">
            <Header id="lil"><span id="lil">Mot du PDG son altesse Ahmed Brhili</span></Header>
            
            <div id="tal">Cher nouveau talent, cette plateforme a pour but de vous accompagner lors du parcours d’intégration, nous prenons cette intégration vraiment au sérieux car cette période est cruciale pour la suite.
Elle vous permet de vous faire une opinion sur l’entreprise, mais surtout de vous intégrer socialement.
Nous avons préparé un parcours d’intégration sur une semaine, composée de visites et d’événements, les inscriptions se font via l’onglet events.
À la fin de cette intégration vous êtes priés de remplir la fiche d’évaluation présente sur l'onglet téléchargements, ceci nous permettra d’étudier vos avis, et d’améliorer les futures semaines d’intégrations.
</div><div id="tal" id="mr">Sur ce Toute l’équipe vous souhaite une intégration réussie.</div>

                </div>
    
    </Segment>
    
    <div  >
       <img id="img" src="https://nsa40.casimages.com/img/2021/05/06//21050606552674377.png"></img>
     </div>
    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
            <img src="https://nsa40.casimages.com/img/2021/05/06/mini_210506070514436273.png"></img>
              <h2>A kind of magic!</h2>
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
            <img src="https://nsa40.casimages.com/img/2021/05/06/mini_210506070514436273.png"></img>
              <h2>A kind of magic!</h2>
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <img src="https://nsa40.casimages.com/img/2021/05/06/mini_210506070514436273.png"></img>
              <h2>A kind of magic!</h2>
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas eaque at quae cupiditate aspernatur quibusdam!
                  Distinctio quod non, harum dolorum earum molestias,
                  beatae expedita aliquam dolorem asperiores nemo amet quaerat.
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
