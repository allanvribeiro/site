import React from 'react'
import { Container } from 'react-bootstrap'

const Blog = (props) => {
    return (
        <Container>

            <h1>Blog</h1>
            <hr></hr>
            <h3>La fin du Flash</h3>
            <p>Dans 2019, l'Adobe a annoncé la fin du Flash Player sur tous les navigateurs web. Maintenant il n'y a que neuf
                 mois pour la mise à jour que supprimera le plugin.  Mais comment le Flash s'est tourné l'ennemi des 
                 navigateurs web et quelle est la situation des logiciels qui sont encore disponibles avec Flash. </p>
            <p>Le Flash était une technologie très populaire dans les anées 2000 pour créer des animations, des jeux-vidéos
                et des sites web. Mais sa popularité a commencé a tomber à cause des problèmes recurrants de securité et le 
                lancement de l'iPhone. Quand la marque Apple a exposé l'iPhone une polémique s'est instalée. Le manque de soutien 
                au Flash Player sur le navigateur Safari. L'iPhone a été un succès et à commencé à forcer les développeurs a migrer
                ses sites web pour technologies standardisées pour les navigateurs web.
            </p>
            <p>Après l'annonce, Google avec son système d'exploitation Android, garde le soutien au Flash. Ce soutien n'a pas duré et
                 aujourd'hui c'est impossible d'utiliser les logiciels Flash aux télephones portables. La plupart des personnes utilisent le
                 télephone portable pour acceder à l'internet, et si le logiciel ne fonctionne pas les problèmes commenceriont à se lever.</p>
            <p>À peu près d'un an, le grande majorité des logiciels sont dejá actualisés avec des technologies web standardisées.
                Mais il y a des logiciels qui n'ont pas encore été mis à jour. Une des solutions serait de refaire les logiciels, mais la
                multitude des logiciels est très vaste et peut-être ne seront pas prêts à temps. Une autre solution serait de continuer avec Flash
                et renseingner les utilisateurs à utiliser une version ancienne de leur navigateur qui supportait le Flash. 
                Le grande problème avec la dernière solution c'est que le navigateur a beaucoup de bogues et failles de sécurité 
                qui ne seront pas corrigées.
            </p>
            <p>
                La fin du Flash ne provoquera pas beaucoup de problèmes pour les utilisateurs. Par contre, les développeurs
                 auront beaucoup de problèmes au moment de mettre à l'heure les logiciels 
                et principalement ceux qui n'ont pas le temps et la possibilité de les mettre à jour.
            </p>
        </Container>
    )
}

export default Blog;