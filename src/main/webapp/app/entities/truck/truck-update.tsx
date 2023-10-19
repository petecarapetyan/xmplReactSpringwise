import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITruck } from 'app/shared/model/truck.model';
import { getEntity, updateEntity, createEntity, reset } from './truck.reducer';

export const TruckUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const truckEntity = useAppSelector(state => state.truck.entity);
  const loading = useAppSelector(state => state.truck.loading);
  const updating = useAppSelector(state => state.truck.updating);
  const updateSuccess = useAppSelector(state => state.truck.updateSuccess);

  const handleClose = () => {
    navigate('/truck');
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
      ...truckEntity,
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
          ...truckEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="xmplReactSpringwiseApp.truck.home.createOrEditLabel" data-cy="TruckCreateUpdateHeading">
            <Translate contentKey="xmplReactSpringwiseApp.truck.home.createOrEditLabel">Create or edit a Truck</Translate>
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
                  id="truck-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.truck.modelName')}
                id="truck-modelName"
                name="modelName"
                data-cy="modelName"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.truck.make')}
                id="truck-make"
                name="make"
                data-cy="make"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.truck.motorSize')}
                id="truck-motorSize"
                name="motorSize"
                data-cy="motorSize"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.truck.color')}
                id="truck-color"
                name="color"
                data-cy="color"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/truck" replace color="info">
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

export default TruckUpdate;
