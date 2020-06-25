import React from 'react';
import { mount, context } from '../../utils/testUtils';
import { _Photo as Photo } from '../../components/photo/Photo';

describe('photo component', () => {
  const baseProps = {
    thumbnailUrl: '',
    fetchPhotoAction: jest.fn(),
  };

  let wrapper = mount(<Photo {...baseProps}></Photo>, {
    context,
  });

  it('renders without any error', () => {
    expect(wrapper.length).toBe(1);
  });

  it('receives correct props', () => {
    expect(wrapper.props().thumbnailUrl).toEqual(baseProps.thumbnailUrl);
    expect(wrapper.props().fetchPhotoAction).toEqual(
      baseProps.fetchPhotoAction
    );
  });

  it('runs dispatcher on mount', () => {
    expect(wrapper.props().fetchPhotoAction).toHaveBeenCalled();
  });
});
