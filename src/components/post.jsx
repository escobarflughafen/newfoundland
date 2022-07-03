import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Container, Card, Navbar, Nav, ListGroup, Row, Col, CardGroup, Accordion, Badge, Button } from 'react-bootstrap';
import '../App.css'
import { posts } from '../utils/placeholders';

const badgeColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark']

function PostTitleItem(props) {
    const post = props.post;

    return (
        <div>
            <Row>
                <Col>
                    <Link to={`/posts/${post.id}`} className="text-black" onClick={(e)=>{e.stopPropagation();}}>
                        <strong>{post.title}</strong>
                    </Link>
                </Col>
                <Col xs="auto">
                    {post.tags?.map((tag) => {
                        return (
                            (
                                <Badge bg={badgeColors[(Math.floor(Math.random() * badgeColors.length)) % badgeColors.length]} className="me-1">
                                    {tag}
                                </Badge>
                            )
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
}

function PostNavBar(props) {

    const navigate = useNavigate();
    return (
        <Row>
            <Col xs="auto">
                <Button variant="link" onClick={(e) => {e.stopPropagation(); navigate(-1);}}>back</Button>
            </Col>
            <Col className="p-2">
                <PostTitleItem post={props?.post} /> 
            </Col>
            <Col xs="auto">
                <Button variant="link" onClick={(e) => {e.stopPropagation(); navigate(-1);}}>settings</Button>
            </Col>
        </Row>

    )
}

function PostBody(props) {

    return(
        <div>
            <p>123</p>
        </div>
    )
}

function PostPreview(props) {

    return(
        <div>
            <p>post body</p>
        </div>
    )
}



export { PostTitleItem, PostNavBar, PostBody, PostPreview };