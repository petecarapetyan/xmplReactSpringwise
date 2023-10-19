import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICar } from 'app/shared/model/car.model';
import { getEntity, updateEntity, createEntity, reset } from './car.reducer';

export const CarUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const carEntity = useAppSelector(state => state.car.entity);
  const loading = useAppSelector(state => state.car.loading);
  const updating = useAppSelector(state => state.car.updating);
  const updateSuccess = useAppSelector(state => state.car.updateSuccess);

  const handleClose = () => {
    navigate('/car');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...carEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...carEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="xmplReactSpringwiseApp.car.home.createOrEditLabel" data-cy="CarCreateUpdateHeading">
            <Translate contentKey="xmplReactSpringwiseApp.car.home.createOrEditLabel">Create or edit a Car</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="car-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.car.motorSize')}
                id="car-motorSize"
                name="motorSize"
                data-cy="motorSize"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.car.modelName')}
                id="car-modelName"
                name="modelName"
                data-cy="modelName"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.car.wheelSize')}
                id="car-wheelSize"
                name="wheelSize"
                data-cy="wheelSize"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.car.transmission')}
                id="car-transmission"
                name="transmission"
                data-cy="transmission"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.car.color')}
                id="car-color"
                name="color"
                data-cy="color"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.car.yearOf')}
                id="car-yearOf"
                name="yearOf"
                data-cy="yearOf"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.car.price')}
                id="car-price"
                name="price"
                data-cy="price"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/car" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default CarUpdate;
