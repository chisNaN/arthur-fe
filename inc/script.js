function navIntoSubDir(p1_s_sub_dir, p2_o_img)
{

	if(document.getElementById(p1_s_sub_dir).style.display == 'none')
	{
		document.getElementById(p1_s_sub_dir).style.display = 'block';

		p2_o_img.src='images/-.jpg';

			if(window.XMLHttpRequest)
			{
				var o_ajax=new XMLHttpRequest();

			}else if(window.ActiveXObject)
			{
				try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

				catch(e)
				{
					try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

						catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
				}
			}

			o_ajax.open('POST','ajax/navIntoSubDir.php', true);

			o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			o_ajax.onreadystatechange=function()
			{
				if(o_ajax.readyState==4)
				{
					document.getElementById(p1_s_sub_dir).innerHTML=o_ajax.responseText;
				}
			}
			o_ajax.send('sub_dir='+encodeURIComponent(p1_s_sub_dir));

	}else{

			document.getElementById(p1_s_sub_dir).style.display = 'none';
			p2_o_img.src='images/+.jpg';

		}
}



function makeFilesList()
{
	if(window.XMLHttpRequest)
	{
		var o_ajax=new XMLHttpRequest();

	}else if(window.ActiveXObject)
	{
		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

		catch(e)
		{
			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

				catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
		}
	}

	o_ajax.open('POST','ajax/makeFilesList.php', true);

	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	o_ajax.onreadystatechange=function()
	{
		if(o_ajax.readyState==4)
		{
			with(document.getElementById('search_files'))
			{
				innerHTML ='<input type="text" id="for_auto_completion" placeholder="Search a File" name="for_auto_completion" onkeyup="searchFile(document.getElementById(\'for_auto_completion\').value);" />';
				innerHTML +='<br /><br />';
				innerHTML +='<div id="retour_results"> </div>';
			}

		}
	}
	o_ajax.send('do='+encodeURIComponent('list_files'));
}

function scanFiles(p1_s_new_path)
{
	if(window.XMLHttpRequest)
	 {

		var o_ajax=new XMLHttpRequest();

	 }else if(window.ActiveXObject)
	 {

		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

		catch(e)
		{

			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

			catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
		}
	}

	o_ajax.open('POST','ajax/scanFiles.php', true);

	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	o_ajax.onreadystatechange=function()
	{
		if(o_ajax.readyState==4)
		{

			document.getElementById('display_files').innerHTML=o_ajax.responseText;
		}
	}
	o_ajax.send('page='+encodeURIComponent(p1_s_new_path));
}

function callOfficeProcessus(p1_s_dirname_to_ascii)
{
    document.getElementById('return_from_rightClick').style.visibility = 'visible';

	if(window.XMLHttpRequest)
	 {

		var o_ajax=new XMLHttpRequest();


	 }else if(window.ActiveXObject)
	 {

		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

		catch(e)
		{

			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

			catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
		}
	}

	o_ajax.open('POST','ajax/callOfficeProcessus.php', true);

	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	o_ajax.onreadystatechange=function()
	{
		if(o_ajax.readyState==4)
		{

			 document.getElementById('return_from_rightClick').innerHTML=o_ajax.responseText;


		}
	}
	o_ajax.send('filename='+encodeURIComponent(p1_s_dirname_to_ascii));



}

function createNewDir(p1_s_abs_path_to_curdir, p2_s_new_dirname)
{

	if(p2_s_new_dirname !='')
	{

		var regexx=new RegExp('[.<>*|"?:]','g');

		if(! regexx.test(p2_s_new_dirname))
		{

			if(window.XMLHttpRequest)
			 {

				var o_ajax=new XMLHttpRequest();

			 }else if(window.ActiveXObject)
			 {

				try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

				catch(e)
				{

					try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

					catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
				}
			}

			o_ajax.open('POST','ajax/createNewDir.php', true);

			o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			o_ajax.onreadystatechange=function()
			{
				if(o_ajax.readyState==4)
				{

					if(o_ajax.responseText != 'OK') document.getElementById('display_files').innerHTML=o_ajax.responseText;
				}
			}
			o_ajax.send('do=md&name='+encodeURIComponent(p2_s_new_dirname)+'&abspath='+encodeURIComponent(p1_s_abs_path_to_curdir));

		}else{ alert('Les caractères suivants sont interdits : .<>*|"?:'); }

	}else{ alert('Vous devez spécifier une valeur !'); }
}

function delEmptyDir(p1_s_abs_path_to_emptydir)
{

	if(window.XMLHttpRequest)
 	{

		var o_ajax=new XMLHttpRequest();

	 }else if(window.ActiveXObject)
	 {

			try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

			catch(e)
				{

					try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

					catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
				}
			}

		o_ajax.open('POST','ajax/delEmptyDir.php', true);

		o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			o_ajax.onreadystatechange=function()
			{
				if(o_ajax.readyState==4)
				{

					document.getElementById('display_files').innerHTML=o_ajax.responseText;
				}
			}
			o_ajax.send('abspath='+encodeURIComponent(p1_s_abs_path_to_emptydir));

}


function searchFile(p1_s_filename)
{

	if(window.XMLHttpRequest)
	 {

		var o_ajax=new XMLHttpRequest();

	 }else if(window.ActiveXObject)
	 {

		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

		catch(e)
		{

			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

			catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
		}
	}

	o_ajax.open('POST','ajax/searchFile.php', true);

	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	o_ajax.onreadystatechange=function()
	{
		if(o_ajax.readyState==4)
		{

			document.getElementById('retour_results').innerHTML=o_ajax.responseText;
		}
	}
	o_ajax.send('filename='+encodeURIComponent(p1_s_filename));

}

function videCorbeille()
{

    if(document.getElementById('return_from_rightClick').style.visibility == 'visible') document.getElementById('return_from_rightClick').style.visibility = 'hidden';

	if(window.XMLHttpRequest)
	 {

		var o_ajax=new XMLHttpRequest();

	 }else if(window.ActiveXObject)
	 {

		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

		catch(e)
		{

			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

			catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
		}
	}

	o_ajax.open('POST','ajax/videCorbeille.php', true);

	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	o_ajax.onreadystatechange=function()
	{
		if(o_ajax.readyState==4)
		{
			document.getElementById('corbeille').innerHTML=o_ajax.responseText;
		}
	}
	o_ajax.send('do=videcorb');

}

function addToCorbeille(p1_s_filename, p2_only_dirpath)
{

	if(window.XMLHttpRequest)
	 {

		var o_ajax=new XMLHttpRequest();

	 }else if(window.ActiveXObject)
	 {

		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

		catch(e)
		{

			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

			catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
		}
	}

	o_ajax.open('POST','ajax/addToCorbeille.php', true);

	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	o_ajax.onreadystatechange=function()
	{
		if(o_ajax.readyState==4)
		{
			document.getElementById('corbeille').innerHTML=o_ajax.responseText;

			scanFiles(p2_only_dirpath);                                            //  <== ATTENTION :: rappel a scanFiles();
		}
	}
	o_ajax.send('file='+encodeURIComponent(p1_s_filename)+'&dir_src='+encodeURIComponent(p2_only_dirpath)+'&is_multi_selection='+encodeURIComponent(b_for_is_control_a));

	//NE PAS OUBLIER DE RAFRAICHIR LE DOSSIER OU A ETE SUPPRIMé LE FICHIER !!!!!!!!!!!



}


 /**

 GESTION DU DRAG N DROP des fichiers

 */


 	var s_conteneur_ecouteur_src;   				//variable qui contiendra l'id du parent de l'objet declanchant l'event startdrag
	var b_for_is_defined_current_target = false;
	var o_timer_for_limit_call_to_fngetdest;
	var b_for_block_call_to__fngetdest=false;
	var s_anchor_src_event;
	var s_dir_src;

	function fnGetSource(p1_s_anchor_for_dragndrop, p2_s_dir_src)
    {
    	s_anchor_src_event = p1_s_anchor_for_dragndrop;
    	s_conteneur_ecouteur_src = event.currentTarget.parentNode.id;
    	s_dir_src = p2_s_dir_src;
   	}

    function fnGetDestination()
	{

		if(!b_for_block_call_to__fngetdest)
		{

			b_for_block_call_to__fngetdest=true;                          //METTRE tout de suite a TRUE pour blocker les futurs appel

			o_timer_for_limit_call_to_fngetdest = setInterval(timer, 1000);  //le timer se chargera de remettre le bool a false pour réautoriser l uasage de la funktion

			if(b_for_is_control_a)											//SI LE CLIENT VEUT DEPLACER TOUS LES FICHIERS DU DOSSIER DE LA SCENE
			{

				 	var b_for_confirmation = confirm('Tous les fichiers de '+s_dir_src+' seront déplacés vers '+event.srcElement.id+' !');

					 if(b_for_confirmation)
					 {

						if(window.XMLHttpRequest)
					 	{
					 		var o_ajax=new XMLHttpRequest();

					 	}else if(window.ActiveXObject)
					 	{
					 		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

					 		catch(e)
					 		{
					 			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

					 				catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
					 		}
					 	}

					 	o_ajax.open('POST','ajax/handleMultiFilesDragNDrop.php', true);

					 	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

					 	o_ajax.onreadystatechange=function()
					 	{
					 		if(o_ajax.readyState==4)
					 		{
					 			document.getElementById('display_files').innerHTML=o_ajax.responseText;
					 		}
					 	}
					 	o_ajax.send('dir_src='+encodeURIComponent(s_dir_src)+'&dir_dest='+encodeURIComponent(event.srcElement.id));
					}

			}else{

					 var b_for_confirmation = confirm('Le fichier '+s_anchor_src_event+' sera déplacé vers '+event.srcElement.id+' !');

					 if(b_for_confirmation)
					 {

						// ENFIN l ajax avec toutes les variables dont le SSSL a besoin

						if(window.XMLHttpRequest)
					 	{
					 		var o_ajax=new XMLHttpRequest();

					 	}else if(window.ActiveXObject)
					 	{
					 		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

					 		catch(e)
					 		{
					 			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

					 				catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
					 		}
					 	}

					 	o_ajax.open('POST','ajax/handleFileDragNDrop.php', true);

					 	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

					 	o_ajax.onreadystatechange=function()
					 	{
					 		if(o_ajax.readyState==4)
					 		{
					 			document.getElementById('display_files').innerHTML=o_ajax.responseText;
					 		}
					 	}
					 	o_ajax.send('file='+encodeURIComponent(s_anchor_src_event)+'&dir_dest='+encodeURIComponent(event.srcElement.id));
					}
				}

		}else{ /* alert('appel a drag dest bolcké'); */ }

	}

	function timer()
	{
		b_for_block_call_to__fngetdest=false;
		clearInterval(o_timer_for_limit_call_to_fngetdest);
	}

    function cancelEvent()
    {
		window.event.returnValue = false;
	}

	function showImgInfos(p1_s_img_src, p2_i_x_client, p3_i_y_client, p4_o_img)
	{
		p2_i_x_client += 100;
		p3_i_y_client += document.body.scrollTop;


		with(document.getElementById('for_img_infos'))
		{

			if(p4_o_img.naturalWidth >= 1000 || p4_o_img.naturalWidth >= 1000)
			{

				style.cssText = 'position: absolute; background: url("'+p1_s_img_src+'"); visibility: visible;';
				style.cssText += 'top: '+p3_i_y_client+'px; width: '+p4_o_img.naturalWidth+'px; height: '+p4_o_img.naturalHeight+'px;';

				innerHTML = '<span style="font-size: 14px; font-weight: bold;">'+p4_o_img.naturalWidth+' * '+p4_o_img.naturalHeight+'</span>';
				innerHTML += '<br /> <span style="font-size: 14px; font-weight: bold; color: #FFFFFF">'+p4_o_img.naturalWidth+' * '+p4_o_img.naturalHeight+'</span>';


			}else{
						style.cssText = 'position: absolute; background: url("'+p1_s_img_src+'"); visibility: visible;';
						style.cssText += ' top: '+p3_i_y_client+'px; left: '+p2_i_x_client+'px; width: '+p4_o_img.naturalWidth+'px; height: '+p4_o_img.naturalHeight+'px;';

						innerHTML = '<span style="font-size: 14px; font-weight: bold;">'+p4_o_img.naturalWidth+' * '+p4_o_img.naturalHeight+'</span>';
						innerHTML += '<br /> <span style="font-size: 14px; font-weight: bold; color: #FFFFFF">'+p4_o_img.naturalWidth+' * '+p4_o_img.naturalHeight+'</span>';
				 }
		}
	}

	function hideImgInfos()
	{
		with(document.getElementById('for_img_infos'))
		{
			style.visibility = 'hidden';
			innerHTML = '';
		}
	}

function zipExtract(p1_s_zip_src, p2_s_dir_src)
 {

 	document.getElementById('display_files').innerHTML = '<h3>Extraction en cours</h3><img src="images/loading.gif" border="none" />';

 	if(window.XMLHttpRequest)
 	{
 		var o_ajax=new XMLHttpRequest();

 	}else if(window.ActiveXObject)
 	{
 		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

 		catch(e)
 		{
 			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

 				catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
 		}
 	}

 	o_ajax.open('POST','ajax/zipExtract.php', true);

 	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

 	o_ajax.onreadystatechange=function()
 	{
 		if(o_ajax.readyState==4)
 		{
 			document.getElementById('display_files').innerHTML=o_ajax.responseText;
 		}
 	}
 	o_ajax.send('zip_src='+encodeURIComponent(p1_s_zip_src)+'&dir_src='+encodeURIComponent(p2_s_dir_src));
 }

 // GESTION entrée clavier

 	var sc_key_codes = '';
	var b_for_is_control_a = false;

	function enableAllSelection(p1_i_key_code)
	{
		sc_key_codes +=  p1_i_key_code+'|';

		if(sc_key_codes == '17|65|')
		{
			document.getElementById('show_selection_status').innerHTML = '<b>Sélection multiple activée</b>';
			b_for_is_control_a = true;

		}else if(sc_key_codes == '17|')
		{
			document.getElementById('show_selection_status').innerHTML = '';
			b_for_is_control_a = false;

		}else{
				document.getElementById('show_selection_status').innerHTML = '';
				sc_key_codes = '';
				b_for_is_control_a = false;
			 }
	 }

 function rightClick(e)
	{

	if ((!document.all && e.which == 3) || (document.all && event.button==2))
	{
	   //alert('test');

       document.getElementById('return_from_rightClick').style.visibility = 'visible';

		if(window.XMLHttpRequest)

			{

				var o_ajax=new XMLHttpRequest();

                //alert(o_ajax);

			}else if(window.ActiveXObject)

			{

				try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }



				catch(e)

				{

					try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }



						catch(e){ alert('you current browser does\'nt support AXo or xhr'); }

				}

			}



			o_ajax.open('POST','ajax/rightClick.php', true);



			o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");



			o_ajax.onreadystatechange=function()

			{

				if(o_ajax.readyState==4)

				{

					document.getElementById('return_from_rightClick').innerHTML=o_ajax.responseText;

				}

			}

			o_ajax.send('');

	}
	return true;
}
document.onmousedown = rightClick;

function removeOneFileFromTrash(p1_s_what_file)
{


 	if(window.XMLHttpRequest)
 	{
 		var o_ajax=new XMLHttpRequest();

 	}else if(window.ActiveXObject)
 	{
 		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

 		catch(e)
 		{
 			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

 				catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
 		}
 	}

 	o_ajax.open('POST','ajax/rightClick.php', true);

 	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

 	o_ajax.onreadystatechange=function()
 	{
 		if(o_ajax.readyState==4)
 		{
 			document.getElementById('return_from_rightClick').innerHTML=o_ajax.responseText;
 		}
 	}
 	o_ajax.send('s_the_file='+encodeURIComponent(p1_s_what_file));
}

//In order to preserve all special chars, encodeURIComponent(); function has to be used in client side
//and the restults in server sided must NOT be decoded!!!

function saveModification(p1_s_new_ascii_content, p2_s_what_file)
{
    document.getElementById('return_from_saveModification').innerHTML= 'Processing...';

 	if(window.XMLHttpRequest)
 	{
 		var o_ajax=new XMLHttpRequest();

 	}else if(window.ActiveXObject)
 	{
 		try {var o_ajax=new ActiveXObject('Microsoft.XMLHTTP'); }

 		catch(e)
 		{
 			try { var o_ajax=new ActiveXObject('Msxml2.XMLHTTP'); }

 				catch(e){ alert('you current browser does\'nt support AXo or xhr'); }
 		}
 	}

 	o_ajax.open('POST','ajax/saveModification.php', true);

 	o_ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

 	o_ajax.onreadystatechange=function()
 	{
 		if(o_ajax.readyState==4)
 		{
 			document.getElementById('return_from_saveModification').innerHTML=o_ajax.responseText;
 		}
 	}
 	o_ajax.send('s_new_ascii_content='+encodeURIComponent(p1_s_new_ascii_content)+'&s_what_file='+encodeURIComponent(p2_s_what_file));
}