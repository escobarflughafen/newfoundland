import { Card, ListGroup } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom'
import { PostNavBar } from '../components/post'
import { posts } from '../utils/placeholders'

function Post(props) {

    let { id } = useParams();
    let post = posts.find((post) => post.id == id);

    return (
        <ListGroup variant='flush'>
            <ListGroup.Item>
            <PostNavBar post={post} />
            </ListGroup.Item>
            <ListGroup.Item>
                <p>
                1 Originally,[1] God created the sky[2] and the earth. 2 And the earth was inchoate chaos[3] and darkness upon abyss[4], God's spirit levitating[5] upon the water.

3 And God said, "Light is to be," and light was to be. 4 And God saw this light was good, and God separated the light from the darkness. 5 And God called the light day, and called the darkness night. And it was evening, and it was morning, one day.

6And God said, "A dome[6] is to be inside the waters, and it is to separate water from water." 7And God made the dome, and separated the water which was below the dome from the water which was above the dome; and it was so. 8 And God called the dome 'sky'. And it was evening, and it was morning, a second day[7].

9 And God said, "The waters below the sky are to pool in one place, and the dry land show." And it was so. 10 And God called the dry land 'earth', and the pool of water he called 'seas'. And God saw it was good. 11 And God said, "Engrassed is the Earth to be with vegetation seeding seeds, fruit trees making fruit of its kind, with its seed inside, on the land." And so it was. 12 And the land sprouted vegetation seeding seeds, of each kind, and fruit trees making fruit of its kind with its seed inside, on the land. And God saw that it was good. 13 And it was evening and it was morning, a third day.

14 And God said, "There are to be lights in the dome of the sky, to distinguish the night from the day; and they will be for signs and for seasons, for days and years. 15 And the lights in the dome of the sky are to light up the earth." And so it was. 16 And God made the two great lights: the big light, to govern the day, and the small light to govern the night, and the stars. 17 And God gave them in the dome of the sky to light up the earth, 18 and to govern the day and night, and to separate the light and the dark. And God saw that it was good. 19 And it was evening, and it was morning: a fourth day.

20 And God said, "The waters are to teem with teeming animal spirit; and fliers will fly over the land, upon the dome of the sky." 21 And God created the big sea dragons[8], and all the kinds of crawling beings which teemed in the water, and every winged flier to its kind, and God saw that it was good. 22 And God blessed them, saying: "Bear fruit and multiply, and fill the water in the seas, and birds will multiply on the land." 23 And it was evening, and it was morning: a fifth day.

24 And God said, "The land is to emit animal beings of each kind: cattle and crawlers and wild animals, to a kind." And it was so. 25 And God made the wild animals to a kind, and the domestic beasts to a kind, and the crawler to a kind. And God saw that it was good.

26 And God said, "Let us make man in our image, in our likeness. And they will oversee the fish of the sea and the bird of the sky, and the domestic beasts, and all the wild animals and all the crawlers that crawl the earth."[9]

27 And God created man in his image; in the image of God created him; male and female he created them. 28 And God blessed them, and God told them, "Bear fruit and multiply and fill up the earth, and conquer it, and oversee the fish in the sea, and the birds in the sky, and every animal which crawls upon the earth."

29 And God said, "Here: I give to you every seeding plant throughout all the earth, and every tree which has tree fruit, which produces seed. They are for you to eat. 30 And to every wild animal, and to every bird of the sky, and to everything crawling on the land which has within it the breath of life, every green plant for food." And it was so.

31 And God saw everything which he had done, and here it is, very good! And it was evening, and it was morning: the sixth day.

1 Completed were the sky and the earth and all their ranks.[10]

2 And God completed on the seventh day the creation which he had done, and rested (shabbath) on the seventh day from all the creation which he had done.

3 And God blessed the seventh day, and made it holy, because on it he rested from his creation which was created by God for making.
                </p>
            </ListGroup.Item>

        </ListGroup>

    )

}


export default Post;