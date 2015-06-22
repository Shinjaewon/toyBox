package com.toyBox.mapper;


import org.apache.ibatis.annotations.Select;

/**
 * Created by 201210098 on 2015-04-09.
 */
public interface DustMapper {
    @Select("SELECT 1F FROM  dust order by rand() limit 1")
    String getDust();

    @Select("SELECT 2F FROM  dust order by rand() limit 1")
    String getDust2();

    @Select("SELECT 3F FROM  dust order by rand() limit 1")
    String getDust3();

    @Select("SELECT 4F FROM  dust order by rand() limit 1")
    String getDust4();

    @Select("SELECT 5F FROM  dust order by rand() limit 1")
    String getDust5();


    @Select("SELECT 6F FROM  dust order by rand() limit 1")
    String getDust6();

    @Select("SELECT 7F FROM  dust order by rand() limit 1")
    String getDust7();

    @Select("SELECT 8F FROM  dust order by rand() limit 1")
    String getDust8();

    @Select("SELECT 9F FROM  dust order by rand() limit 1")
    String getDust9();

    @Select("SELECT 10F FROM  dust order by rand() limit 1")
    String getDust10();


}
