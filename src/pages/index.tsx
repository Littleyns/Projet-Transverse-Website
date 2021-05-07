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
        <p>Notre priorité ? Faciliter vos premiers pas dans le groupe</p>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe" >
            <div className="main">
            <Header id="lil"><span id="lil">Mot du PDG son altesse Youness Srhir</span></Header>
            
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
              <h2>Vincent, Consultant Technique</h2>
            </Header>
            <p>
            Développeur Androïd Diplômé de l’ESIEA. Stage de fin d’études chez just healpuis CDI
J’ai travaillé au sein d’une équipe projet de quatre personnes. J’ai reçu un bon accueil, l’ambiance était très sympa et mon tuteur à l’écoute. Le bilan est très positif, j’ai eu beaucoup de liberté et surtout du temps pour faire de la veille technologique. En plus j’ai pu participer à des évènements sympas (tournois de foot, soirées,Espace game…) Mon expérience en un mot : liberté
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
            <img src="https://nsa40.casimages.com/img/2021/05/06/mini_210506070514436273.png"></img>
              <h2>Jean, Développeur d'application</h2>
            </Header>
            <p>
            Entré comme stagiaire chez just heal , j’y suis depuis 2 ans maintenant et j’occupe aujourd’hui le poste de leader technique au sein d’un projet OBS d’environ 8 personnes. »
Un accueil personnalisé dès votre premier jour 
 
A votre arrivée, vous êtes accueilli par votre manager. Accessible et attentif, il vous présente votre projet et votre environnement de travail. Vous rencontrerez les équipes avec lesquelles vous travaillerez et serez accompagné dans vos premiers pas sur votre projet.
                </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <img src="https://nsa40.casimages.com/img/2021/05/06/mini_210506070514436273.png"></img>
              <h2>Charline, Chargée de communication</h2>
            </Header>
            <p>
            Ce qui m’a frappée lors de mon arrivée, ce sont les nombreuses attentions dont nous sommes les bénéficiaires permettant aussi de vivre une intégration réussie : cadeaux de bienvenue, visite des locaux, etc. Un exemple ? La première ouverture de ma boîte mail. Lorsque les mails ont tous commencés à apparaître et que j’ai pu voir tous les événements auxquels j’étais déjà conviée : afterwork de la BU, tournoi de e-sport, séminaire marque employeur, … C’est plaisant de découvrir que l’on fait déjà entièrement partie de l'entreprise avant même son arrivée ! 
                </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
