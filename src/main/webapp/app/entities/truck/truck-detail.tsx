import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './truck.reducer';

export const TruckDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const truckEntity = useAppSelector(state => state.truck.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="truckDetailsHeading">
          <Translate contentKey="xmplReactSpringwiseApp.truck.detail.title">Truck</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{truckEntity.id}</dd>
          <dt>
            <span id="modelName">
              <Translate contentKey="xmplReactSpringwiseApp.truck.modelName">Model Name</Translate>
            </span>
          </dt>
          <dd>{truckEntity.modelName}</dd>
          <dt>
            <span id="make">
              <Translate contentKey="xmplReactSpringwiseApp.truck.make">Make</Translate>
            </span>
          </dt>
          <dd>{truckEntity.make}</dd>
          <dt>
            <span id="motorSize">
              <Translate contentKey="xmplReactSpringwiseApp.truck.motorSize">Motor Size</Translate>
            </span>
          </dt>
          <dd>{truckEntity.motorSize}</dd>
          <dt>
            <span id="color">
              <Translate contentKey="xmplReactSpringwiseApp.truck.color">Color</Translate>
            </span>
          </dt>
          <dd>{truckEntity.color}</dd>
        </dl>
        <Button tag={Link} to="/truck" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/truck/${truckEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TruckDetail;
