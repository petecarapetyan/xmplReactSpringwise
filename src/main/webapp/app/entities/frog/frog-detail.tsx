import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './frog.reducer';

export const FrogDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const frogEntity = useAppSelector(state => state.frog.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="frogDetailsHeading">
          <Translate contentKey="xmplReactSpringwiseApp.frog.detail.title">Frog</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{frogEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="xmplReactSpringwiseApp.frog.name">Name</Translate>
            </span>
          </dt>
          <dd>{frogEntity.name}</dd>
          <dt>
            <span id="age">
              <Translate contentKey="xmplReactSpringwiseApp.frog.age">Age</Translate>
            </span>
          </dt>
          <dd>{frogEntity.age}</dd>
          <dt>
            <span id="species">
              <Translate contentKey="xmplReactSpringwiseApp.frog.species">Species</Translate>
            </span>
          </dt>
          <dd>{frogEntity.species}</dd>
        </dl>
        <Button tag={Link} to="/frog" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/frog/${frogEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FrogDetail;
