import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './movie.reducer';

export const MovieDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const movieEntity = useAppSelector(state => state.movie.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="movieDetailsHeading">
          <Translate contentKey="xmplReactSpringwiseApp.movie.detail.title">Movie</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{movieEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="xmplReactSpringwiseApp.movie.name">Name</Translate>
            </span>
          </dt>
          <dd>{movieEntity.name}</dd>
          <dt>
            <span id="yearOf">
              <Translate contentKey="xmplReactSpringwiseApp.movie.yearOf">Year Of</Translate>
            </span>
          </dt>
          <dd>{movieEntity.yearOf}</dd>
          <dt>
            <span id="genre">
              <Translate contentKey="xmplReactSpringwiseApp.movie.genre">Genre</Translate>
            </span>
          </dt>
          <dd>{movieEntity.genre}</dd>
          <dt>
            <span id="rating">
              <Translate contentKey="xmplReactSpringwiseApp.movie.rating">Rating</Translate>
            </span>
          </dt>
          <dd>{movieEntity.rating}</dd>
        </dl>
        <Button tag={Link} to="/movie" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/movie/${movieEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default MovieDetail;
