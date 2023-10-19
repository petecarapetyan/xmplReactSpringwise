import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './airplane.reducer';

export const AirplaneDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const airplaneEntity = useAppSelector(state => state.airplane.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="airplaneDetailsHeading">
          <Translate contentKey="xmplReactSpringwiseApp.airplane.detail.title">Airplane</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{airplaneEntity.id}</dd>
          <dt>
            <span id="model">
              <Translate contentKey="xmplReactSpringwiseApp.airplane.model">Model</Translate>
            </span>
          </dt>
          <dd>{airplaneEntity.model}</dd>
          <dt>
            <span id="make">
              <Translate contentKey="xmplReactSpringwiseApp.airplane.make">Make</Translate>
            </span>
          </dt>
          <dd>{airplaneEntity.make}</dd>
          <dt>
            <span id="color">
              <Translate contentKey="xmplReactSpringwiseApp.airplane.color">Color</Translate>
            </span>
          </dt>
          <dd>{airplaneEntity.color}</dd>
        </dl>
        <Button tag={Link} to="/airplane" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/airplane/${airplaneEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default AirplaneDetail;
