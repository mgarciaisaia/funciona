#!/usr/bin/env ruby
require 'mechanize'

mechanize = Mechanize.new

page = mechanize.get('http://bicis.buenosaires.gob.ar/mapa.aspx')

matches = page.body.scan(/var marker_subgurim_\d+_=_sg\.cs\.createMarker\(\{position:new google\.maps\.LatLng\(([^,]+),([^,]+)\),clickable:true,draggable:false,map:subgurim_GMap1,raiseOnDrag:true,visible:true,icon:new google\.maps\.MarkerImage\('([^']+)', new google\.maps\.Size\(34,39\), new google\.maps\.Point\(0,0\), new google\.maps\.Point\(34,39\)\)\}, 'marker_subgurim_\d+_'\);var window_subgurim_\d+_=new google\.maps\.InfoWindow\(\{content:'<div style=\\'height:100px;\\'><span class=\\'style1\\' style=\\'\\'>([^<]+)(<br>)?(Cerrado\. Horario de atenci[^n]*n: [^<]+)?<\/span><br><span class=\\'style2\\'>Cant\. Bicicletas disponibles: (\d+)<\/span><br><\/div>',maxWidth:120\}\);google\.maps\.event\.addListener\(marker_subgurim_\d+_,'click',function\(\)\{closeWindows\('subgurim_GMap1'\);window_subgurim_\d+_\.open\(subgurim_GMap1,marker_subgurim_\d+_\);\}\);GMapsProperties\['subgurim_GMap1'\]\['windowArray'\]\.push\(\['window_subgurim_\d+_',window_subgurim_\d+_\]\);/)

json = matches.map do | match |
	{"lat" => match[0], "lng" => match[1], "icon" => match[2], "name" => match[3], "status" => match[5], "available" => match[6]}
end

File.write('../../../public/bicis.json', json)
