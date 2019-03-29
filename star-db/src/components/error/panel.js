const Panel = ({ type, className='', title='', titlePlaceHolder, contentPlaceHolder, content=[], id, focusTitle=false, rows=5}) => {  
	const classNames = `${className} ${content.length ? '' : 'empty' } ${type} 'panel' 'panel-default'`;

	onDispatchReducer = (e, action, paneTitle=false) => {
		const panelId = e.target.closest('.panel').id;
		dispatchReducer(action, {
			id: panelId,
			title: paneTitle ? e.target.value : ''
		});
	}


	return (
		<div id={id} className = { classNames } draggable='true'>
			<div className= 'panel-heading'>
				<span className= 'glyphicon glyphicon-move' arria-hidden='true'></span>
				<input type='text'  className = 'form-control panel-title' 
					placeholder={ titlePlaceHolder }
					value= '?'
					onBlur = {(e) = {onDispatchReducer(e, 'SAVE_PANEL_TITLE', true)}}/>
				<span className = 'glyphicon glyphicon-chevron-down toggle-panel' arria-hidden='true'
					onClick = {(e) => { onClickTogglePanel(e)}} ></span>	
				<span className = 'glyphicon glyphicon-remove remove-panel' arria-hidden='true'
					onClick = {(e) => { onClickRemovePanel(e)}} ></span>				
			</div>
		</div>
	);
});
