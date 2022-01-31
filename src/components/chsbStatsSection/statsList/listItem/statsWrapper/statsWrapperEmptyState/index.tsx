import React from 'react'

import * as statsWrapperEmptyStateStyles from './statsWrapperEmptyStateStyles.module.css'

const StatsWrapperEmptyState = () => (
  <div className={statsWrapperEmptyStateStyles.emptyState}>
    <p className={statsWrapperEmptyStateStyles.errorMessage}>
      Data is not available
    </p>
  </div>
)

export default StatsWrapperEmptyState
