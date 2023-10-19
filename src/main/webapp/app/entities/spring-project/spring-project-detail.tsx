import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './spring-project.reducer';

export const SpringProjectDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const springProjectEntity = useAppSelector(state => state.springProject.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="springProjectDetailsHeading">
          <Translate contentKey="xmplReactSpringwiseApp.springProject.detail.title">SpringProject</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{springProjectEntity.id}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="xmplReactSpringwiseApp.springProject.title">Title</Translate>
            </span>
          </dt>
          <dd>{springProjectEntity.title}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="xmplReactSpringwiseApp.springProject.description">Description</Translate>
            </span>
          </dt>
          <dd>{springProjectEntity.description}</dd>
          <dt>
            <span id="imagePath">
              <Translate contentKey="xmplReactSpringwiseApp.springProject.imagePath">Image Path</Translate>
            </span>
          </dt>
          <dd>{springProjectEntity.imagePath}</dd>
          <dt>
            <span id="url">
              <Translate contentKey="xmplReactSpringwiseApp.springProject.url">Url</Translate>
            </span>
          </dt>
          <dd>{springProjectEntity.url}</dd>
        </dl>
        <Button tag={Link} to="/spring-project" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/spring-project/${springProjectEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default SpringProjectDetail;
