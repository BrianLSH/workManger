<?php

namespace App\Http\Controllers\Import;


class UserImport extends \Maatwebsite\Excel\Files\ExcelFile
{
    use \App\Http\Controllers\Result;

    public function getFile()
    {

        return storage_path('app') .'/'.$this->fileUpdate();
    }

    public function getFilters()
    {
        return [
            'chunk'
        ];
    }

}
