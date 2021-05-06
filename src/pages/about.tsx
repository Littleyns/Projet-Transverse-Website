import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            Ici vous trouverez les différentes pièces-jointes
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical id="downloads">
        <div id="dwn">

        <h2 id="h">
          Fiche d'évaluation 
        </h2>
        <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAAwMDCWlpalpaU6Ojr7+/sODg7Gxsbn5+d5eXl+fn52dnbw8PAjIyNnZ2c/Pz9SUlL09PSenp7U1NQrKyvOzs5ERETAwMAVFRXr6+scHByrq6vc3NyysrKFhYWOjo42NjZubm5gYGAYGBhMTExnUI3GAAAED0lEQVR4nO2da3eiMBCGCaxWtIp33fVWa/f//8U9igGC4VIyCZnu+3zqB870fcoMxIOkQQAAAAAAAAAAAAAAAAAAAPDfsvy4hrd13ykschIPor5z2GOTGopt30FsMXoKis++k9jilzTc9Z3EFpnhYNh3FEvAkD8w5A8M+QND/sCQPzDkDwz5A0P+wJA/MOQPDPkDQ/7AkD8w5A8M+QND/sCQPzDkDwz5A0P+wJA/MOQPDPkDQ/7AkD8w5A8M+QND/sCQPzDkDwz5A0P+wJA/MPSextjtDb38C+yT+SKqT9bWcH9rLNUDk0f0zbTumJaGl8cx19pS7jk/s7/9qTmoneH4edCCOqMZcxl+Flcf1MpQCgpRU8k9y0OWa1Z9FtsYTrJC4mwjaVeGszzYW+UAtTAsCIq9nawdSQrJKmex2XBcKCP8uprGxWhVs9hoqAiu7KXtxKgY7qA/i02GxRYV7zbTdkJR1M9ig6HngiXFL12j1huOfRcsKepmsdZQOYNj+2k7oSj+fm3UOkPvWzRFURQvl5saQwYtmlLfqNWGbATLiqWzWGnIYgYlaqOqs1hlyGQGJep9UWnUCkNGLZpSPYt6Q0XQ9xZNqVzAaQ2ZtWiK2qi5os6QXYumqGcxa1SNIVPBqll8NWR1m1DRftJ4MWQ5gxLdAq5syLZFUzSNWjJkLqhbwKmGjGdQ8rKAUwxZz6BE/bwYK4bsWzRFbdTpUf44/wktmqIobi6Z4Q85g3fUWdTCW7CFInfBRkXOMyipVeR/Bu/UKP4MwRpFb1p0OtqfjApUKJoJGqfKie5pFkZfHNAqmrUoQSrJR5pnY/TAUqNoJvhMdTAqkpI9+zR7YvmiaNaiRKkeFBaTRpQUDa+iZ6JUdyJZ682w0IhQME8VGhYKCA2Lisb3QT8Nc0Xz+6CnhlKR4Ebvq2EQJ7PDnOK7Tt4aBsFwSVLGY0MiYNipFgydAsNOtWDoFBh2qgVDp8CwUy0YOgWGnWrB0Ckw7FQLhk6BYadaMHQKDL/DStYS5rXoyL58dDWvdfTSMHtnleAf0W8zw7V5MTJ2MlRiXit//9Wj11ZJQy03hENNRX5xGBFUy1/T3hJUoyHMMlG88J09MvdnH4f86kfwGD8Iplk5caSoZw55osJuAl5cToe7PBDN08hTXlBQfc/KgOEtj3MhqrkoKPa+WcW0cAbJtj9RtoRI+t0Z51jMEpGVjYplxWRN0/3fJ16FxSCUN+iFoig2t8lH5JpLslNTkF4UpsJDaHfoiZt/oWuol8mnr76NStB/DojD5t/qECubSL33bZUTWlp5bAd9mz2huw+WGZ59aNWL3Y3ctp/96g2ODpYb6+Pk7yB0znWXrEZ+7XAGAAAAAAAAAAAAAAAAAADQln/taS0PJgy45gAAAABJRU5ErkJggg==" width="50px" height="50px"></img></a></div>
        
        <div id="dwn">
        <h2 id="h">
          Le plan des locaux
        </h2>        <a href="https://nsa40.casimages.com/img/2021/05/06/21050608521517438.png"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAAwMDCWlpalpaU6Ojr7+/sODg7Gxsbn5+d5eXl+fn52dnbw8PAjIyNnZ2c/Pz9SUlL09PSenp7U1NQrKyvOzs5ERETAwMAVFRXr6+scHByrq6vc3NyysrKFhYWOjo42NjZubm5gYGAYGBhMTExnUI3GAAAED0lEQVR4nO2da3eiMBCGCaxWtIp33fVWa/f//8U9igGC4VIyCZnu+3zqB870fcoMxIOkQQAAAAAAAAAAAAAAAAAAAPDfsvy4hrd13ykschIPor5z2GOTGopt30FsMXoKis++k9jilzTc9Z3EFpnhYNh3FEvAkD8w5A8M+QND/sCQPzDkDwz5A0P+wJA/MOQPDPkDQ/7AkD8w5A8M+QND/sCQPzDkDwz5A0P+wJA/MOQPDPkDQ/7AkD8w5A8M+QND/sCQPzDkDwz5A0P+wJA/MPSextjtDb38C+yT+SKqT9bWcH9rLNUDk0f0zbTumJaGl8cx19pS7jk/s7/9qTmoneH4edCCOqMZcxl+Flcf1MpQCgpRU8k9y0OWa1Z9FtsYTrJC4mwjaVeGszzYW+UAtTAsCIq9nawdSQrJKmex2XBcKCP8uprGxWhVs9hoqAiu7KXtxKgY7qA/i02GxRYV7zbTdkJR1M9ig6HngiXFL12j1huOfRcsKepmsdZQOYNj+2k7oSj+fm3UOkPvWzRFURQvl5saQwYtmlLfqNWGbATLiqWzWGnIYgYlaqOqs1hlyGQGJep9UWnUCkNGLZpSPYt6Q0XQ9xZNqVzAaQ2ZtWiK2qi5os6QXYumqGcxa1SNIVPBqll8NWR1m1DRftJ4MWQ5gxLdAq5syLZFUzSNWjJkLqhbwKmGjGdQ8rKAUwxZz6BE/bwYK4bsWzRFbdTpUf44/wktmqIobi6Z4Q85g3fUWdTCW7CFInfBRkXOMyipVeR/Bu/UKP4MwRpFb1p0OtqfjApUKJoJGqfKie5pFkZfHNAqmrUoQSrJR5pnY/TAUqNoJvhMdTAqkpI9+zR7YvmiaNaiRKkeFBaTRpQUDa+iZ6JUdyJZ682w0IhQME8VGhYKCA2Lisb3QT8Nc0Xz+6CnhlKR4Ebvq2EQJ7PDnOK7Tt4aBsFwSVLGY0MiYNipFgydAsNOtWDoFBh2qgVDp8CwUy0YOgWGnWrB0Ckw7FQLhk6BYadaMHQKDL/DStYS5rXoyL58dDWvdfTSMHtnleAf0W8zw7V5MTJ2MlRiXit//9Wj11ZJQy03hENNRX5xGBFUy1/T3hJUoyHMMlG88J09MvdnH4f86kfwGD8Iplk5caSoZw55osJuAl5cToe7PBDN08hTXlBQfc/KgOEtj3MhqrkoKPa+WcW0cAbJtj9RtoRI+t0Z51jMEpGVjYplxWRN0/3fJ16FxSCUN+iFoig2t8lH5JpLslNTkF4UpsJDaHfoiZt/oWuol8mnr76NStB/DojD5t/qECubSL33bZUTWlp5bAd9mz2huw+WGZ59aNWL3Y3ctp/96g2ODpYb6+Pk7yB0znWXrEZ+7XAGAAAAAAAAAAAAAAAAAADQln/taS0PJgy45gAAAABJRU5ErkJggg==" width="50px" height="50px"></img></a></div>
        <div id="dwn">
        <h2 id="h">
        Guide
        </h2>         <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAAwMDCWlpalpaU6Ojr7+/sODg7Gxsbn5+d5eXl+fn52dnbw8PAjIyNnZ2c/Pz9SUlL09PSenp7U1NQrKyvOzs5ERETAwMAVFRXr6+scHByrq6vc3NyysrKFhYWOjo42NjZubm5gYGAYGBhMTExnUI3GAAAED0lEQVR4nO2da3eiMBCGCaxWtIp33fVWa/f//8U9igGC4VIyCZnu+3zqB870fcoMxIOkQQAAAAAAAAAAAAAAAAAAAPDfsvy4hrd13ykschIPor5z2GOTGopt30FsMXoKis++k9jilzTc9Z3EFpnhYNh3FEvAkD8w5A8M+QND/sCQPzDkDwz5A0P+wJA/MOQPDPkDQ/7AkD8w5A8M+QND/sCQPzDkDwz5A0P+wJA/MOQPDPkDQ/7AkD8w5A8M+QND/sCQPzDkDwz5A0P+wJA/MPSextjtDb38C+yT+SKqT9bWcH9rLNUDk0f0zbTumJaGl8cx19pS7jk/s7/9qTmoneH4edCCOqMZcxl+Flcf1MpQCgpRU8k9y0OWa1Z9FtsYTrJC4mwjaVeGszzYW+UAtTAsCIq9nawdSQrJKmex2XBcKCP8uprGxWhVs9hoqAiu7KXtxKgY7qA/i02GxRYV7zbTdkJR1M9ig6HngiXFL12j1huOfRcsKepmsdZQOYNj+2k7oSj+fm3UOkPvWzRFURQvl5saQwYtmlLfqNWGbATLiqWzWGnIYgYlaqOqs1hlyGQGJep9UWnUCkNGLZpSPYt6Q0XQ9xZNqVzAaQ2ZtWiK2qi5os6QXYumqGcxa1SNIVPBqll8NWR1m1DRftJ4MWQ5gxLdAq5syLZFUzSNWjJkLqhbwKmGjGdQ8rKAUwxZz6BE/bwYK4bsWzRFbdTpUf44/wktmqIobi6Z4Q85g3fUWdTCW7CFInfBRkXOMyipVeR/Bu/UKP4MwRpFb1p0OtqfjApUKJoJGqfKie5pFkZfHNAqmrUoQSrJR5pnY/TAUqNoJvhMdTAqkpI9+zR7YvmiaNaiRKkeFBaTRpQUDa+iZ6JUdyJZ682w0IhQME8VGhYKCA2Lisb3QT8Nc0Xz+6CnhlKR4Ebvq2EQJ7PDnOK7Tt4aBsFwSVLGY0MiYNipFgydAsNOtWDoFBh2qgVDp8CwUy0YOgWGnWrB0Ckw7FQLhk6BYadaMHQKDL/DStYS5rXoyL58dDWvdfTSMHtnleAf0W8zw7V5MTJ2MlRiXit//9Wj11ZJQy03hENNRX5xGBFUy1/T3hJUoyHMMlG88J09MvdnH4f86kfwGD8Iplk5caSoZw55osJuAl5cToe7PBDN08hTXlBQfc/KgOEtj3MhqrkoKPa+WcW0cAbJtj9RtoRI+t0Z51jMEpGVjYplxWRN0/3fJ16FxSCUN+iFoig2t8lH5JpLslNTkF4UpsJDaHfoiZt/oWuol8mnr76NStB/DojD5t/qECubSL33bZUTWlp5bAd9mz2huw+WGZ59aNWL3Y3ctp/96g2ODpYb6+Pk7yB0znWXrEZ+7XAGAAAAAAAAAAAAAAAAAADQln/taS0PJgy45gAAAABJRU5ErkJggg==" width="50px" height="50px"></img></a></div>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
