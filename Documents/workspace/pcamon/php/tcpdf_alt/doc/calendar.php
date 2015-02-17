<?php
//============================================================+
// File name   : example_002.php
// Begin       : 2008-03-04
// Last Update : 2013-05-14
//
// Description : Example 002 for TCPDF class
//               Removing Header and Footer
//
// Author: Nicola Asuni
//
// (c) Copyright:
//               Nicola Asuni
//               Tecnick.com LTD
//               www.tecnick.com
//               info@tecnick.com
//============================================================+

// Include the main TCPDF library (search for installation path).
require_once ('tcpdf_include.php');
    include '../../login.php';  
    include '../../db_fnc.php'; 

$surveyContent = '';
// Check parameter
/*
if (isset($_POST['data'])) {

	$json = stripslashes($_POST['data']);

	$output = json_decode($json, true);

}
 */
 
// $json = stripslashes($_POST['json']);
 //      $output  =json_decode($json);// json_decode($_POST["json"]);
      $data     = getSurveyData( 1, 'id','asc');
	// echo $output[0]->{'elements'};

// List entries are the seconde element, index 1
$eintraege = $data;

// Loop through json values and write to db, Only if data was send

foreach ($eintraege as $key => $value) {
	$surveyContent = $surveyContent . '<tr>' . '<td width="80%" align="left">'.$eintraege[$key][question] . '</td>' . '<td width="20%" align="right">' . $eintraege[$key][rating] . '</td></tr>';

}
//$surveyContent = $output ;
// Extend the TCPDF class to create custom Header and Footer
/*
class MYPDF extends TCPDF {

	//Page header
	public function Header() {
		// Logo
		$image_file = K_PATH_IMAGES . 'pca4business.jpg';
		$this -> Image($image_file, 10, 10, 15, '', 'JPG', '', 'T', false, 300, '', false, false, 0, false, false, false);
		// Set font
		$this -> SetFont('helvetica', 'B', 20);
		// Title
		$this -> Cell(0, 15, 'Fragebogen', 0, false, 'C', 0, '', 0, false, 'M', 'M');
	}

	// Page footer
	public function Footer() {
		// Position at 15 mm from bottom
		$this -> SetY(-15);
		// Set font
		$this -> SetFont('helvetica', 'I', 8);
		// Page number
		$this -> Cell(0, 10, 'Page ' . $this -> getAliasNumPage() . '/' . $this -> getAliasNbPages(), 0, false, 'C', 0, '', 0, false, 'T', 'M');
	}

}
*/
// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf -> SetCreator(PDF_CREATOR);
$pdf -> SetAuthor('pca4business');
$pdf -> SetTitle('Vertrag');
$pdf -> SetSubject('Coaching Vertrag');
$pdf -> SetKeywords('');

// remove default header/footer
//$pdf -> SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE, PDF_HEADER_STRING);

// set default header data
//$pdf -> SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE, PDF_HEADER_STRING);

// set header and footer fonts
//$pdf -> setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
//$pdf -> setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf -> SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set auto page breaks
$pdf -> SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf -> setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__) . '/lang/eng.php')) {
	require_once (dirname(__FILE__) . '/lang/eng.php');
	$pdf -> setLanguageArray($l);
}

// ---------------------------------------------------------

// set font
$pdf -> SetFont('times', 'BI', 20);

// add a page
$pdf -> AddPage();
//echo $surveyContent;
//$surveyContent = '<tr><td></td><td></td></tr>';
// set some text to print
// Set some content to print
$html = <<<EOF

<!-- EXAMPLE OF CSS STYLE -->
<style>
    h1 {
        color: navy;
        font-family: times;
        font-size: 24pt;
      
    }
    p.first {
        color: #003300;
        font-family: helvetica;
        font-size: 12pt;
    }
    p.first span {
        color: #006600;
        font-style: italic;
    }
    p#second {
        color: rgb(00,63,127);
        font-family: times;
        font-size: 12pt;
        text-align: justify;
    }
    p#second > span {
        background-color: #FFFFAA;
    }
    table.first {
        color: #003300;
        font-family: helvetica;
        font-size: 8pt;
   
        border: 1px solid #ffffff;
    }
    td {
        border: 2px solid blue;
        background-color: #ffffee;
    }
    td.second {
        border: 2px dashed green;
    }
    div.test {
        color: #CC0000;
        background-color: #FFFF66;
        font-family: helvetica;
        font-size: 10pt;
        border-style: solid solid solid solid;
        border-width: 2px 2px 2px 2px;
        border-color: green #FF00FF blue red;
        text-align: center;
    }
</style>
<br />
 

<h1>Fragebogen</h1>

 
<br />
 
<table class="first" cellpadding="4" cellspacing="6">
 <tr>
  <td width="80%" align="left"><b>Frage</b></td>
  <td width="20%" align="right"><b>Wertung</b></td>
 </tr>
  $surveyContent
  
</table>

EOF;

// Print text using writeHTMLCell()
//$pdf -> writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);
$pdf->writeHTML($html, true, false, true, false, '');
// ---------------------------------------------------------

//Close and output PDF document
$pdf -> Output('fragebogen.pdf', 'I');
//echo $html;

	//  echo $surveyContent;
//echo   json_decode($_POST['data']);
//============================================================+
// END OF FILE
//============================================================+
