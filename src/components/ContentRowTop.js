import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import ChartUser from './ChartUser';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-blue-600">Estado General de la Tienda</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies/>
					<ContentRowCenter/>
					<Chart/>
					<ChartUser/>
					
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;