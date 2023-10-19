import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './car.reducer';

export const CarDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const carEntity = useAppSelector(state => state.car.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="carDetailsHeading">
          <Translate contentKey="xmplReactSpringwiseApp.car.detail.title">Car</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{carEntity.id}</dd>
          <dt>
            <span id="motorSize">
              <Translate contentKey="xmplReactSpringwiseApp.car.motorSize">Motor Size</Translate>
            </span>
          </dt>
          <dd>{carEntity.motorSize}</dd>
          <dt>
            <span id="modelName">
              <Translate contentKey="xmplReactSpringwiseApp.car.modelName">Model Name</Translate>
            </span>
          </dt>
          <dd>{carEntity.modelName}</dd>
          <dt>
            <span id="wheelSize">
              <Translate contentKey="xmplReactSpringwiseApp.car.wheelSize">Wheel Size</Translate>
            </span>
          </dt>
          <dd>{carEntity.wheelSize}</dd>
          <dt>
            <span id="transmission">
              <Translate contentKey="xmplReactSpringwiseApp.car.transmission">Transmission</Translate>
            </span>
          </dt>
          <dd>{carEntity.transmission}</dd>
          <dt>
            <span id="color">
              <Translate contentKey="xmplReactSpringwiseApp.car.color">Color</Translate>
            </span>
          </dt>
          <dd>{carEntity.color}</dd>
          <dt>
            <span id="yearOf">
              <Translate contentKey="xmplReactSpringwiseApp.car.yearOf">Year Of</Translate>
            </span>
          </dt>
          <dd>{carEntity.yearOf}</dd>
          <dt>
            <span id="price">
              <Translate contentKey="xmplReactSpringwiseApp.car.price">Price</Translate>
            </span>
          </dt>
          <dd>{carEntity.price}</dd>
        </dl>
        <Button tag={Link} to="/car" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/car/${carEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CarDetail;
