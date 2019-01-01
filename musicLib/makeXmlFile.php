<?php
$i_start_script = time();

class R
{
    const SYS_DIRS = ['.', '..'];
    const DS = DIRECTORY_SEPARATOR;

    public $a_numbers;

    public function __construct()
    {

        set_time_limit(0);

        $i = 10;

        while($i--) $this->a_numbers [] = (string)$i;

    }

    public function makeXmlFile($p1_s_dir_src = '')
    {
        static $i_indent;

        $i_indent++;

        if(is_dir($p1_s_dir_src))
        {
            $m_elements = @scandir($p1_s_dir_src, SCANDIR_SORT_ASCENDING);

            if(is_array($m_elements))
            {
                foreach($m_elements as $s_elements):

                    $FullName = $p1_s_dir_src.$s_elements;

                    if(is_dir($FullName))
                    {
                        if(!in_array($s_elements, self::SYS_DIRS))
                        {

                            $s_cleaned_xml_illegals_chars = preg_replace('#[[:^alnum:]]#i', '_', $s_elements);

                            if($s_elements === '00' || $s_elements === '#') //you must name your folder with double 0 and using special char like # may leads to apache forbidden access
                            {
                                yield str_repeat('	', $i_indent).'<sharp>'.PHP_EOL;

                                $SubTrav = $this->makeXmlFile($FullName.self::DS);

                                foreach($SubTrav as $SubItem) yield $SubItem;

                                $i_indent--;

                                yield str_repeat('	', $i_indent).'</sharp>'.PHP_EOL;

                            }elseif(in_array(substr($s_elements, 0, 1), $this->a_numbers))
                            {

                                yield str_repeat('	', $i_indent).'<n'.$s_cleaned_xml_illegals_chars.' name="'.str_replace(array('&', '"', '<'), array('AMPERSAND', "DQ", 'INF'), $s_elements).'">'.PHP_EOL;

                                $SubTrav = $this->makeXmlFile($FullName.self::DS);

                                foreach($SubTrav as $SubItem) yield $SubItem;

                                $i_indent--;

                                yield str_repeat('	', $i_indent).'</n'.$s_cleaned_xml_illegals_chars.'>'.PHP_EOL;

                            }else
                            {
                                yield str_repeat('	', $i_indent).'<'.$s_cleaned_xml_illegals_chars.' name="'.str_replace(array('&', '"', '<'), array('AMPERSAND', "DQ", 'INF'), $s_elements).'">'.PHP_EOL;

                                $SubTrav = $this->makeXmlFile($FullName.self::DS);

                                foreach($SubTrav as $SubItem) yield $SubItem;

                                $i_indent--;

                                yield str_repeat('	', $i_indent).'</'.$s_cleaned_xml_illegals_chars.'>'.PHP_EOL;

                            }

                        }

                    }else
                    {
                        if(FALSE === stripos($s_elements, 'ds_store') && FALSE === stripos($s_elements, 'thumbs.db') && FALSE === stripos($s_elements, '._'))
                        {
                            yield str_repeat('	', $i_indent).'<path><![CDATA['.$p1_s_dir_src.$s_elements.']]></path>'.PHP_EOL;
                        }
                    }

                endforeach;
            }
        }
    }
}
//be careful to put slash or backslash at the end
$dir_path = '/Volumes/Samsung/Music/HQ Music/';

$R = new R;

$gen_xml = $R->makeXmlFile($dir_path);

$xml = '';

foreach($gen_xml as $xml_nodes)  $xml .= $xml_nodes;

var_dump(file_put_contents('xml/music-lib.xml', '<?xml version="1.0" encoding="UTF-8" ?>'.PHP_EOL.'<musicLibrary path="'.$dir_path.'">'.PHP_EOL.$xml.'</musicLibrary>'));

echo '<h1>'.(time() - $i_start_script).' second(s)</h1>';
