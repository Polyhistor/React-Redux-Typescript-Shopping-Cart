import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

/**
 * a hook for creating grid styles
 * @function
 * @param{theme} - project defined theme
 * @returns {Function} - function that can be invoked to create the styles
 */

export const useStylesGrid = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3.5),
    },
    alt: {
      margin: theme.spacing(2),
    },
    split: {
      display: 'grid',
      gridTemplateColumns: '10% 90%',
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: '50% 50%',
        gridRowGap: '0.5rem',
      },
    },
  })
);

/**
 * a hook for creating Card styles
 * @function
 * @param{theme} - project defined theme
 * @returns {Function} - function that can be invoked to create the styles
 */

export const useStylesCard = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      margin: theme.spacing(1),
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 20,
    },
  })
);

/**
 * a hook for creating Typography styles
 * @function
 * @param{theme} - project defined theme
 * @returns {Function} - function that can be invoked to create the styles
 */

export const useStyleTypography = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: theme.typography.h4.fontSize,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.h6.fontSize,
      },
    },
    alt: {
      fontSize: theme.typography.h5.fontSize,
    },
  })
);

/**
 * a hook for creating Button styles
 * @function
 * @returns {Function} - function that can be invoked to create the styles
 */

export const useStyleButton = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    fullWidth: {
      width: '100%',
    },
  })
);

/**
 * a hook for creating Table styles
 * @function
 * @param{theme} - project defined theme
 * @returns {Function} - function that can be invoked to create the styles
 */

export const useStylesTable = makeStyles(() =>
  createStyles({
    root: {
      minWidth: 650,
    },
  })
);

/**
 * a hook for creating Avatar styles
 * @function
 * @param{theme} - project defined theme
 * @returns {Function} - function that can be invoked to create the styles
 */

export const useStylesAvatar = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
    },
  })
);
